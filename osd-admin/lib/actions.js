"use server";

import { redirect } from "next/navigation";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { getAdminSupabaseClient, isSupabaseReady } from "@/lib/supabase/admin";
import { requestPublicRevalidation } from "@/lib/revalidate";
import { isR2Configured, uploadBufferToR2 } from "@/lib/r2";
import { isMailConfigured, sendAdminReplyEmail } from "@/lib/mail";

function successResult(message, extra = {}) {
  return {
    ok: true,
    message,
    ...extra,
  };
}

function errorResult(message) {
  return {
    ok: false,
    message,
  };
}

async function ensureAdminDatabase() {
  if (!isSupabaseReady()) {
    throw new Error("Supabase admin environment variables are not configured.");
  }

  return getAdminSupabaseClient();
}

function parseParagraphs(value) {
  return String(value || "")
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .trim();
}

function normalizeOptional(value) {
  const normalized = String(value || "").trim();
  return normalized || null;
}

async function uploadCoverImage(file) {
  if (!(file instanceof File) || !file.size) {
    return "";
  }

  if (!isR2Configured()) {
    throw new Error("Cover image upload requires Cloudflare R2 configuration.");
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const upload = await uploadBufferToR2({
    buffer,
    fileName: file.name,
    contentType: file.type,
    folder: "blog",
  });

  return upload.url;
}

async function revalidateBlogPaths(slugs = []) {
  const cleanSlugs = Array.from(new Set(slugs.filter(Boolean)));
  await requestPublicRevalidation({
    paths: ["/blog", ...cleanSlugs.map((slug) => `/blog/${slug}`)],
    tags: ["blog-posts", ...cleanSlugs.map((slug) => `blog-post:${slug}`)],
  });
}

export async function logoutAction() {
  const supabase = await createServerSupabaseClient();
  await supabase?.auth.signOut();
  redirect("/login");
}

export async function saveBlogPostModalAction(_previousState, formData) {
  try {
    const supabase = await ensureAdminDatabase();
    const title = String(formData.get("title") || "").trim();
    const slug = String(formData.get("slug") || "").trim();
    const previousSlug = String(formData.get("previousSlug") || "").trim();
    const category = String(formData.get("category") || "").trim();
    const excerpt = String(formData.get("excerpt") || "").trim();
    const content = parseParagraphs(formData.get("content"));
    const status = String(formData.get("status") || "draft").trim() === "published" ? "published" : "draft";
    const currentCoverImage = String(formData.get("currentCoverImage") || "").trim();
    const coverImageFile = formData.get("coverImage");

    if (!title || !slug || !content) {
      return errorResult("Title, slug, and content are required.");
    }

    const nextCoverImage = await uploadCoverImage(coverImageFile);
    const payload = {
      title,
      slug,
      category: category || null,
      excerpt: excerpt || null,
      content,
      cover_image: nextCoverImage || currentCoverImage || null,
      feature_image: nextCoverImage || currentCoverImage || null,
      status,
      published: status === "published",
      published_at: status === "published" ? new Date().toISOString() : null,
      updated_at: new Date().toISOString(),
    };

    const id = String(formData.get("id") || "").trim();
    const query = id ? supabase.from("blog_posts").update(payload).eq("id", id) : supabase.from("blog_posts").insert(payload);
    const { error } = await query;

    if (error) {
      throw new Error(`Failed to save blog post: ${error.message}`);
    }

    await revalidateBlogPaths([previousSlug, slug]);

    return successResult(status === "published" ? "Post published successfully." : "Draft saved successfully.", {
      slug,
    });
  } catch (error) {
    return errorResult(error.message || "Failed to save blog post.");
  }
}

export async function deleteBlogPostModalAction(_previousState, formData) {
  try {
    const supabase = await ensureAdminDatabase();
    const id = String(formData.get("id") || "").trim();
    const slug = String(formData.get("slug") || "").trim();

    if (!id) {
      return errorResult("Post id is required.");
    }

    const { error } = await supabase.from("blog_posts").delete().eq("id", id);
    if (error) {
      throw new Error(`Failed to delete blog post: ${error.message}`);
    }

    await revalidateBlogPaths([slug]);

    return successResult("Post deleted successfully.");
  } catch (error) {
    return errorResult(error.message || "Failed to delete blog post.");
  }
}

export async function updateEnquiryModalAction(_previousState, formData) {
  try {
    const supabase = await ensureAdminDatabase();
    const id = String(formData.get("id") || "").trim();
    const status = String(formData.get("status") || "new").trim();
    const adminNotes = String(formData.get("adminNotes") || "");

    const { error } = await supabase
      .from("enquiries")
      .update({
        status,
        admin_notes: adminNotes,
        updated_at: new Date().toISOString(),
      })
      .eq("id", id);

    if (error) {
      throw new Error(`Failed to update enquiry: ${error.message}`);
    }

    return successResult("Quote updated successfully.");
  } catch (error) {
    return errorResult(error.message || "Failed to update quote.");
  }
}

export async function deleteEnquiryModalAction(_previousState, formData) {
  try {
    const supabase = await ensureAdminDatabase();
    const id = String(formData.get("id") || "").trim();

    const { error } = await supabase.from("enquiries").delete().eq("id", id);
    if (error) {
      throw new Error(`Failed to delete enquiry: ${error.message}`);
    }

    return successResult("Quote deleted successfully.");
  } catch (error) {
    return errorResult(error.message || "Failed to delete quote.");
  }
}

export async function replyToEnquiryModalAction(_previousState, formData) {
  try {
    const supabase = await ensureAdminDatabase();
    const id = String(formData.get("id") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const subject = String(formData.get("subject") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!email || !subject || !message) {
      return errorResult("Email, subject, and reply message are required.");
    }

    if (!isMailConfigured()) {
      return errorResult("SMTP is not configured for admin replies.");
    }

    await sendAdminReplyEmail({
      to: email,
      subject,
      message,
      replyTo: process.env.COMPANY_EMAIL,
    });

    const { error } = await supabase
      .from("enquiries")
      .update({
        status: "replied",
        updated_at: new Date().toISOString(),
      })
      .eq("id", id);

    if (error) {
      throw new Error(`Reply sent, but status could not be updated: ${error.message}`);
    }

    return successResult("Reply email sent successfully.");
  } catch (error) {
    return errorResult(error.message || "Failed to send reply email.");
  }
}

export async function updateContactModalAction(_previousState, formData) {
  try {
    const supabase = await ensureAdminDatabase();
    const id = String(formData.get("id") || "").trim();
    const status = String(formData.get("status") || "new").trim();
    const adminNotes = normalizeOptional(formData.get("adminNotes"));

    const { error } = await supabase
      .from("contacts")
      .update({
        status,
        admin_notes: adminNotes,
        updated_at: new Date().toISOString(),
      })
      .eq("id", id);

    if (error) {
      throw new Error(`Failed to update contact: ${error.message}`);
    }

    return successResult("Contact updated successfully.");
  } catch (error) {
    return errorResult(error.message || "Failed to update contact.");
  }
}

export async function deleteContactModalAction(_previousState, formData) {
  try {
    const supabase = await ensureAdminDatabase();
    const id = String(formData.get("id") || "").trim();

    const { error } = await supabase.from("contacts").delete().eq("id", id);
    if (error) {
      throw new Error(`Failed to delete contact: ${error.message}`);
    }

    return successResult("Contact deleted successfully.");
  } catch (error) {
    return errorResult(error.message || "Failed to delete contact.");
  }
}

export async function saveTestimonialAction(formData) {
  const supabase = await ensureAdminDatabase();
  const payload = {
    client_name: String(formData.get("clientName") || ""),
    company: String(formData.get("company") || ""),
    country: String(formData.get("country") || ""),
    quote: String(formData.get("quote") || ""),
    status: String(formData.get("status") || "draft"),
    visible: String(formData.get("status") || "draft") === "published",
    updated_at: new Date().toISOString(),
  };

  const id = String(formData.get("id") || "");
  const query = id ? supabase.from("testimonials").update(payload).eq("id", id) : supabase.from("testimonials").insert(payload);
  const { error } = await query;

  if (error) {
    throw new Error(`Failed to save testimonial: ${error.message}`);
  }

  await requestPublicRevalidation({
    paths: ["/", "/testimonials"],
  });

  redirect("/admin/testimonials");
}

export async function saveSettingAction(formData) {
  const supabase = await ensureAdminDatabase();
  const settings = [
    { key: "adminDisplayName", value: String(formData.get("adminDisplayName") || "") },
    { key: "notificationEmail", value: String(formData.get("notificationEmail") || "") },
    { key: "internalNotes", value: String(formData.get("internalNotes") || "") },
  ];

  const { error } = await supabase.from("site_settings").upsert(settings, {
    onConflict: "key",
  });

  if (error) {
    throw new Error(`Failed to save settings: ${error.message}`);
  }

  redirect("/admin/settings");
}
