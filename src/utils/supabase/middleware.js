import { createServerClient } from "@supabase/ssr";
import { NextResponse } from "next/server";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

export function createClient(request) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createServerClient(supabaseUrl, supabaseKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));

        response = NextResponse.next({
          request,
        });

        cookiesToSet.forEach(({ name, value, options }) => {
          response.cookies.set(name, value, options);
        });
      },
    },
  });

  return { supabase, response };
}

export async function updateSession(request) {
  if (!supabaseUrl || !supabaseKey) {
    return NextResponse.next({ request });
  }

  const authCookieNames = request.cookies
    .getAll()
    .map(({ name }) => name)
    .filter((name) => name.startsWith("sb-") && name.includes("-auth-token"));

  // Public storefront routes do not need an auth request when no session exists.
  // This also prevents Supabase from attempting to refresh a non-existent token.
  if (!authCookieNames.length) {
    return NextResponse.next({ request });
  }

  const { supabase, response } = createClient(request);

  const { error } = await supabase.auth.getUser();

  // A stale or incomplete auth cookie cannot be refreshed. Clear only the
  // Supabase session cookies so the next public request is anonymous.
  if (error) {
    authCookieNames.forEach((name) => {
      response.cookies.set(name, "", { maxAge: 0, path: "/" });
    });
  }

  return response;
}
