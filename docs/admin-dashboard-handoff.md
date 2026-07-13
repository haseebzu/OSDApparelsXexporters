# OSD Admin Dashboard Scaffold

This document tracks the separate `osd-admin/` app scaffolded inside the main repo.

## What was added

- `osd-admin/` standalone Next.js admin app scaffold
- login page and protected middleware
- dashboard, quotes, contacts, blog, testimonials, products, and settings screens
- Supabase SSR/browser/admin helpers for the admin app
- public-site revalidation bridge:
  - `src/app/api/revalidate/route.js`
- schema supplement:
  - `supabase/admin-dashboard.sql`

## Local run

- public site: `npm run dev`
- admin app: `npm run dev:admin`

Admin app target:

- `http://localhost:3001`

## Required admin env vars

Copy `osd-admin/.env.example` to `osd-admin/.env.local` and set:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `PUBLIC_SITE_URL`
- `REVALIDATE_SECRET`
- `ADMIN_EMAILS`

## Current blockers

- Supabase DNS/connectivity is still unresolved, so admin auth and CRUD cannot be considered fully operational yet.
- Public contact-specific table is scaffolded, but the public site still sends most lead capture through `enquiries`.
- Product/blog/testimonial admin screens are scaffolded against expected Supabase tables, with static fallback only where practical.

## Next verification steps

1. Fix Supabase project URL / connectivity.
2. Apply `supabase/schema.sql` and `supabase/admin-dashboard.sql`.
3. Create at least one admin user record or set `ADMIN_EMAILS`.
4. Set `REVALIDATE_SECRET` in both apps.
5. Run the admin app on `localhost:3001`.
6. Verify login, quotes read, status update, blog save, and public-site revalidation.
