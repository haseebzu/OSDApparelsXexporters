"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createBrowserSupabaseClient, isSupabaseClientConfigReady } from "@/lib/supabase/client";

export function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") || "/admin";
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const configMissing = !isSupabaseClientConfigReady();

  async function handleSubmit(event) {
    event.preventDefault();
    setBusy(true);
    setError("");

    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") || "").trim();
    const password = String(formData.get("password") || "");

    try {
      if (configMissing) {
        throw new Error("Supabase admin environment variables are missing. Create osd-admin/.env.local first.");
      }

      const supabase = createBrowserSupabaseClient();
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (signInError) {
        throw signInError;
      }

      router.replace(redirectTo);
      router.refresh();
    } catch (submitError) {
      setError(submitError.message || "Login failed. Please check your credentials.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <form className="admin-form" onSubmit={handleSubmit}>
      <label className="admin-field">
        <span>Email</span>
        <input name="email" placeholder="admin@osdapparels.com" required type="email" />
      </label>

      <label className="admin-field">
        <span>Password</span>
        <input name="password" placeholder="Enter your password" required type="password" />
      </label>

      {configMissing ? (
        <p className="admin-message admin-message--error">
          Supabase config is missing for the admin app. Add <code>osd-admin/.env.local</code> before logging in.
        </p>
      ) : null}

      {error ? <p className="admin-message admin-message--error">{error}</p> : null}

      <button className="button button--gold" disabled={busy || configMissing} type="submit">
        {busy ? "Signing in..." : "Login"}
      </button>

      <p className="admin-message admin-message--muted">
        Login is restricted to approved admin accounts only. Public sign-up is intentionally disabled.
      </p>
    </form>
  );
}
