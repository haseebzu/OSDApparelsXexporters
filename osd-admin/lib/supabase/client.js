"use client";

import { createBrowserClient } from "@supabase/ssr";

export function isSupabaseClientConfigReady() {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
      (process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
  );
}

export function createBrowserSupabaseClient() {
  if (!isSupabaseClientConfigReady()) {
    throw new Error("Supabase admin environment variables are missing. Add osd-admin/.env.local first.");
  }

  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
}
