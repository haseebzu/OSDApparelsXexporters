import { testimonials as fallbackTestimonials, blogPosts as fallbackBlogPosts } from "@/lib/shared-data";
import { createReferenceId } from "@/lib/validation";
import { getAdminSupabaseClient, isSupabaseReady } from "@/lib/supabase/admin";

function formatDate(value) {
  if (!value) return "Not available";

  try {
    return new Intl.DateTimeFormat("en-US", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(new Date(value));
  } catch {
    return String(value);
  }
}

function formatContentPreview(value) {
  if (Array.isArray(value)) {
    return value.join("\n\n");
  }

  return String(value || "");
}

function startOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function buildMonthlySeries(items, count = 6) {
  const today = new Date();
  const months = Array.from({ length: count }, (_, index) => {
    const date = new Date(today.getFullYear(), today.getMonth() - (count - index - 1), 1);
    return {
      key: `${date.getFullYear()}-${date.getMonth() + 1}`,
      label: date.toLocaleString("en-US", { month: "short" }),
      value: 0,
    };
  });

  const indexByKey = months.reduce((acc, month, index) => {
    acc[month.key] = index;
    return acc;
  }, {});

  items.forEach((item) => {
    const createdAt = item.created_at || item.updated_at || item.submitted_at;
    if (!createdAt) return;

    const date = startOfMonth(new Date(createdAt));
    const key = `${date.getFullYear()}-${date.getMonth() + 1}`;
    const monthIndex = indexByKey[key];
    if (monthIndex !== undefined) {
      months[monthIndex].value += 1;
    }
  });

  return months;
}

function buildStatusBreakdown(items) {
  const tones = {
    new: "new",
    reviewed: "reviewed",
    replied: "replied",
    closed: "closed",
  };

  return ["new", "reviewed", "replied", "closed"].map((status) => ({
    label: status.charAt(0).toUpperCase() + status.slice(1),
    value: items.filter((item) => (item.status || "new") === status).length,
    tone: tones[status],
  }));
}

function withSubmittedLabel(item) {
  const createdAt = item.created_at || item.updated_at || item.submitted_at;

  return {
    ...item,
    referenceId: item.id ? createReferenceId(item.id, createdAt || new Date()) : "",
    submittedLabel: formatDate(createdAt),
  };
}

function buildConnectivityBlocker(error) {
  return `Supabase admin connectivity is currently blocked. Resolve the DNS / project URL issue before considering admin work complete. Last error: ${error.message}`;
}

async function safeQuery(callback, fallback = []) {
  if (!isSupabaseReady()) {
    return { items: fallback, blocker: "Supabase admin environment variables are not configured for osd-admin." };
  }

  try {
    const items = await callback(getAdminSupabaseClient());
    return { items, blocker: "" };
  } catch (error) {
    console.error("Admin query fallback triggered:", error);
    return { items: fallback, blocker: buildConnectivityBlocker(error) };
  }
}

export async function getDashboardData() {
  const enquiriesResult = await safeQuery(async (supabase) => {
    const { data, error } = await supabase
      .from("enquiries")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) throw error;
    return (data || []).map(withSubmittedLabel);
  });

  const blogResult = await safeQuery(async (supabase) => {
    const { data, error } = await supabase.from("blog_posts").select("*");
    if (error) throw error;
    return data || [];
  }, fallbackBlogPosts);

  const testimonialResult = await safeQuery(async (supabase) => {
    const { data, error } = await supabase.from("testimonials").select("*");
    if (error) throw error;
    return data || [];
  }, fallbackTestimonials);

  const enquiries = enquiriesResult.items;
  const pendingReplies = enquiries.filter((item) => ["new", "reviewed"].includes(item.status)).length;
  const replied = enquiries.filter((item) => item.status === "replied").length;
  const responseRate = enquiries.length ? `${Math.round((replied / enquiries.length) * 100)}%` : "0%";
  const blogPosts = blogResult.items;
  const blogDrafts = blogPosts.filter((item) => (item.status || (item.published ? "published" : "draft")) === "draft").length;

  const countryMap = enquiries.reduce((acc, item) => {
    const label = item.country || "Unknown";
    acc[label] = (acc[label] || 0) + 1;
    return acc;
  }, {});

  return {
    blocker: enquiriesResult.blocker || blogResult.blocker || testimonialResult.blocker,
    stats: {
      totalEnquiries: enquiries.length,
      pendingReplies,
      responseRate,
      blogPosts: blogPosts.length,
      blogDrafts,
      testimonials: testimonialResult.items.length,
    },
    recentEnquiries: enquiries.slice(0, 8),
    countries: Object.entries(countryMap)
      .map(([label, value]) => ({ label, value }))
      .sort((a, b) => b.value - a.value)
      .slice(0, 5),
    volumeSeries: buildMonthlySeries(enquiries),
    statusBreakdown: buildStatusBreakdown(enquiries),
    activity: [
      ...enquiries.slice(0, 4).map((item) => ({
        id: `enquiry-${item.id}`,
        title: `New enquiry from ${item.name}`,
        text: `${item.product_category || "General apparel enquiry"} submitted from ${item.source_page || "quote"}.`,
        meta: item.submittedLabel,
      })),
      ...blogPosts.slice(0, 2).map((item) => ({
        id: `blog-${item.slug || item.id}`,
        title: `Blog content available: ${item.title}`,
        text: `Status: ${item.status || (item.published ? "published" : "draft")}.`,
        meta: formatDate(item.updated_at || item.published_at || item.date),
      })),
    ],
  };
}

export async function getEnquiries({ search = "", status = "" } = {}) {
  const fallback = [];
  const result = await safeQuery(async (supabase) => {
    let query = supabase
      .from("enquiries")
      .select("*, enquiry_files(*)")
      .order("created_at", { ascending: false });

    if (status) query = query.eq("status", status);
    const { data, error } = await query;
    if (error) throw error;

    return (data || [])
      .filter((item) =>
        [item.name, item.company, item.email, item.product_category, item.country, item.id]
          .join(" ")
          .toLowerCase()
          .includes(search.toLowerCase())
      )
      .map((item) =>
        withSubmittedLabel({
          ...item,
          enquiry_files: (item.enquiry_files || []).filter((file) => file.file_url),
        })
      );
  }, fallback);

  return result;
}

export async function getContacts({ search = "", status = "" } = {}) {
  const result = await safeQuery(async (supabase) => {
    let query = supabase.from("contacts").select("*").order("created_at", { ascending: false });
    if (status) query = query.eq("status", status);
    const { data, error } = await query;
    if (error) throw error;

    return (data || [])
      .filter((item) =>
        [item.name, item.email, item.whatsapp, item.country, item.message]
          .join(" ")
          .toLowerCase()
          .includes(search.toLowerCase())
      )
      .map(withSubmittedLabel);
  });

  return {
    ...result,
    summary: {
      total: result.items.length,
      new: result.items.filter((item) => (item.status || "new") === "new").length,
      reviewed: result.items.filter((item) => (item.status || "new") === "reviewed").length,
      closed: result.items.filter((item) => (item.status || "new") === "closed").length,
    },
  };
}

export async function getBlogPosts({ search = "", status = "" } = {}) {
  const result = await safeQuery(async (supabase) => {
    const { data, error } = await supabase.from("blog_posts").select("*").order("updated_at", { ascending: false });
    if (error) throw error;
    return data || [];
  }, fallbackBlogPosts.map((item) => ({
    ...item,
    status: "published",
    published_at: item.date,
  })));

  return {
    ...result,
    items: result.items
      .filter((item) => [item.title, item.slug, item.category].join(" ").toLowerCase().includes(search.toLowerCase()))
      .filter((item) => (status ? (item.status || (item.published ? "published" : "draft")) === status : true))
      .map((item) => ({
        ...item,
        content: formatContentPreview(item.content),
        publishedLabel: formatDate(item.published_at || item.date || item.updated_at),
      })),
  };
}

export function buildEnquirySummary(items) {
  const now = new Date();
  const thisWeekStart = new Date(now);
  thisWeekStart.setDate(now.getDate() - now.getDay());
  thisWeekStart.setHours(0, 0, 0, 0);

  return {
    total: items.length,
    new: items.filter((item) => (item.status || "new") === "new").length,
    awaitingReply: items.filter((item) => ["new", "reviewed"].includes(item.status || "new")).length,
    repliedThisWeek: items.filter((item) => {
      const status = item.status || "new";
      const updatedAt = item.updated_at || item.created_at;
      return status === "replied" && updatedAt && new Date(updatedAt) >= thisWeekStart;
    }).length,
  };
}

export async function getTestimonials() {
  return safeQuery(async (supabase) => {
    const { data, error } = await supabase.from("testimonials").select("*").order("created_at", { ascending: false });
    if (error) throw error;
    return data || [];
  }, fallbackTestimonials.map((item) => ({ ...item, status: "published" })));
}

export async function getSettingsSnapshot() {
  const result = await safeQuery(async (supabase) => {
    const { data, error } = await supabase.from("site_settings").select("*");
    if (error) throw error;
    return data || [];
  });

  const settings = result.items.reduce((acc, item) => {
    acc[item.key] = item.value;
    return acc;
  }, {});

  return {
    settings,
    blocker: result.blocker,
  };
}
