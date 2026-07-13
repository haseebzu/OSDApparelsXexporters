import { createClient } from "@supabase/supabase-js";

let cachedClient;

export function isSupabaseReady() {
  return Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY);
}

export function getAdminSupabaseClient() {
  if (!isSupabaseReady()) {
    throw new Error("Supabase admin environment variables are not configured for osd-admin.");
  }

  if (!cachedClient) {
    cachedClient = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    });
  }

  return cachedClient;
}
