import { redirect } from "next/navigation";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { getAdminSupabaseClient, isSupabaseReady } from "@/lib/supabase/admin";

function getAllowedAdminEmails() {
  return (process.env.ADMIN_EMAILS || "")
    .split(",")
    .map((item) => item.trim().toLowerCase())
    .filter(Boolean);
}

async function checkDatabaseAllowlist(email) {
  if (!email || !isSupabaseReady()) {
    return false;
  }

  const supabase = getAdminSupabaseClient();

  try {
    const adminUsers = await supabase.from("admin_users").select("email").eq("email", email).maybeSingle();
    if (adminUsers.data?.email) {
      return true;
    }
  } catch {
    // Table may not exist yet.
  }

  try {
    const profiles = await supabase.from("profiles").select("role").eq("email", email).maybeSingle();
    if (profiles.data?.role === "admin") {
      return true;
    }
  } catch {
    // Table may not exist yet.
  }

  return false;
}

export async function getCurrentAdminUser() {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
    return null;
  }

  const supabase = await createServerSupabaseClient();
  if (!supabase) {
    return null;
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user?.email) {
    return null;
  }

  const email = user.email.toLowerCase();
  const envAllowlist = getAllowedAdminEmails();

  if (envAllowlist.includes(email)) {
    return user;
  }

  const allowedByTable = await checkDatabaseAllowlist(email);
  return allowedByTable ? user : null;
}

export async function requireAdminUser() {
  const user = await getCurrentAdminUser();
  if (!user) {
    redirect("/login");
  }
  return user;
}
