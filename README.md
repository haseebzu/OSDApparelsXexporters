# OSD Apparels v2

OSD Apparels v2 is a dual-application Next.js workspace for an apparel manufacturer.

It includes:

- a public marketing website for products, services, blog content, and quote capture
- a separate admin dashboard for managing leads and content
- a Supabase-backed data layer with static fallbacks
- optional Cloudflare R2 media storage
- SMTP-based transactional email handling

## Overview

This repository is organized as two standalone Next.js applications:

1. `./`
   The public-facing site, served on port `3000`.
2. `./osd-admin`
   The internal admin dashboard, served on port `3001`.

The public site is content-driven and still keeps a lot of fallback content in [`src/data/site.js`](./src/data/site.js). When Supabase is configured, API routes and admin actions switch to live data where supported.

## What The Project Does

The public site provides:

- homepage, about, services, sustainability, printing, and contact pages
- product browsing for men's and kids' apparel
- quote / custom order / enquiry capture
- blog listing and blog detail pages
- testimonials and certification content
- WhatsApp/contact prompts and multilingual UI helpers

The admin app provides:

- protected admin area with Supabase auth checks
- quotes management
- contacts management
- blog management
- testimonials management
- site settings scaffolding
- public-site revalidation after content updates

## Tech Stack

### Public site

- `Next.js 16`
- `React 19`
- `App Router`
- `Tailwind CSS 4`
- `framer-motion`
- `lucide-react`
- `react-hook-form`
- `zod`
- `@supabase/supabase-js` and `@supabase/ssr`
- `@aws-sdk/client-s3` for Cloudflare R2 uploads
- `nodemailer`
- `@react-email/components` and `@react-email/render`

### Admin app

- `Next.js 16`
- `React 19`
- `Supabase SSR + service-role helpers`
- `nodemailer`
- `zod`

## Repository Structure

```text
.
|-- src/
|   |-- app/                  # Public site routes, API routes, metadata, sitemap
|   |-- components/           # UI building blocks
|   |-- data/site.js          # Main fallback content source
|   |-- emails/               # Public-site email templates
|   |-- hooks/
|   |-- lib/                  # Validation, mail, R2, Supabase, metadata, blog helpers
|   `-- utils/                # Shared helpers including Supabase SSR clients
|-- public/images/            # Site images
|-- scripts/                  # One-off utilities such as blog importing
|-- supabase/                 # SQL setup and migration-style bootstrap files
|-- docs/                     # Handoff and implementation notes
|-- osd-admin/
|   |-- app/                  # Admin routes
|   |-- components/admin/     # Admin UI
|   |-- emails/               # Admin/shared email templates
|   `-- lib/                  # Admin auth, actions, revalidation, R2, Supabase
`-- README.md
```

## Public Site Routes

Current public pages in [`src/app`](./src/app):

- `/`
- `/about`
- `/blog`
- `/blog/[slug]`
- `/certifications`
- `/contact`
- `/custom-order`
- `/how-it-works`
- `/printing`
- `/privacy-policy`
- `/products`
- `/products/mens`
- `/products/kids`
- `/quote`
- `/services`
- `/sustainability`
- `/terms`
- `/testimonials`

Utility routes/files:

- `/manifest.webmanifest`
- `/robots.txt`
- `/sitemap.xml`
- `not-found`

## Admin Routes

Current admin pages in [`osd-admin/app`](./osd-admin/app):

- `/`
- `/login`
- `/admin`
- `/admin/blog`
- `/admin/contacts`
- `/admin/quotes`
- `/admin/settings`
- `/admin/testimonials`

Admin routes are wrapped by protected layout logic and use Supabase auth plus allowlisting.

## Local Content Model

The fallback content source is [`src/data/site.js`](./src/data/site.js).

It currently exports:

- `contact`
- `socials`
- `navigation`
- `heroSlides`
- `stats`
- `services`
- `certifications`
- `processSteps`
- `testimonials`
- `blogPosts`
- `productFamilies`
- `products`
- `printingTechniques`
- `trustPoints`
- `factoryZones`

This file acts like a lightweight local CMS. It is still important even after backend setup because several pages use it as a fallback or as the base shape for API responses.

## Product Data Shape

Products are generated from family/category definitions in [`src/data/site.js`](./src/data/site.js).

Current product shape:

```js
{
  slug,
  family,
  category,
  title,
  subtitle,
  tone,
  description,
  fabrics
}
```

Current families:

- `mens`
- `kids`

## Blog Data Shape

Fallback blog posts are also defined in [`src/data/site.js`](./src/data/site.js).

Current fallback shape:

```js
{
  slug,
  category,
  title,
  excerpt,
  date,
  content: string[]
}
```

When Supabase is enabled, [`src/lib/blog-posts.js`](./src/lib/blog-posts.js) reads from the `blog_posts` table and normalizes content into paragraphs.

## Backend Architecture

### Public APIs

The public app exposes these API routes:

- [`src/app/api/enquiries/route.js`](./src/app/api/enquiries/route.js)
  Accepts multipart quote/enquiry submissions, validates them, stores them in Supabase, uploads reference files to R2 when configured, and sends email notifications.
- [`src/app/api/blog-posts/route.js`](./src/app/api/blog-posts/route.js)
  Returns published blog content with optional `slug` and `category` filtering.
- [`src/app/api/products/route.js`](./src/app/api/products/route.js)
  Returns product data with optional `family` and `category` filtering.
- [`src/app/api/testimonials/route.js`](./src/app/api/testimonials/route.js)
  Returns testimonials, optionally filtered by `visible=true`, with Supabase-first and static fallback behavior.
- [`src/app/api/revalidate/route.js`](./src/app/api/revalidate/route.js)
  Revalidates paths and tags after authorized admin updates.

### Supabase

Public and admin apps use:

- SSR/browser clients for authenticated app requests
- a service-role client for server-side reads/writes
- row-level security policies in SQL

Main helpers:

- [`src/lib/supabase.js`](./src/lib/supabase.js)
- [`src/utils/supabase/client.js`](./src/utils/supabase/client.js)
- [`src/utils/supabase/server.js`](./src/utils/supabase/server.js)
- [`src/utils/supabase/middleware.js`](./src/utils/supabase/middleware.js)
- [`src/proxy.js`](./src/proxy.js)

Admin equivalents live in [`osd-admin/lib/supabase`](./osd-admin/lib/supabase).

### File Uploads

Reference images and optional blog cover images can be uploaded to Cloudflare R2 through:

- [`src/lib/r2.js`](./src/lib/r2.js)
- [`osd-admin/lib/r2.js`](./osd-admin/lib/r2.js)

The public site dynamically whitelists the configured R2 host in [`next.config.mjs`](./next.config.mjs).

### Email

Email is handled via SMTP using Nodemailer and React Email templates.

Important files:

- [`src/lib/mail.js`](./src/lib/mail.js)
- [`src/lib/transporter.js`](./src/lib/transporter.js)
- [`src/emails/CompanyInquiry.jsx`](./src/emails/CompanyInquiry.jsx)
- [`src/emails/CustomerConfirmation.jsx`](./src/emails/CustomerConfirmation.jsx)

The admin app has matching mail helpers in [`osd-admin/lib/mail.js`](./osd-admin/lib/mail.js).

## Enquiry Flow

The main lead-capture pipeline is:

1. A user submits the quote/contact-style form.
2. [`src/lib/validation.js`](./src/lib/validation.js) sanitizes and validates input.
3. [`src/app/api/enquiries/route.js`](./src/app/api/enquiries/route.js) creates an enquiry record.
4. Up to `5` reference files are accepted.
5. Each file is limited to `10 MB`.
6. Files are uploaded to R2 if configured.
7. Enquiry metadata is stored in Supabase.
8. Notification email is sent to the company.
9. Confirmation email is sent back to the customer.

Current validated fields:

- `sourcePage`
- `name`
- `company`
- `email`
- `whatsapp`
- `country`
- `productCategory`
- `quantity`
- `fabric`
- `decoration`
- `description`

## Admin Auth Model

The admin dashboard checks for an authorized user in this order:

1. Supabase authenticated user session
2. email allowlist in `ADMIN_EMAILS`
3. `admin_users` table
4. `profiles` table with `role = 'admin'`

Main logic lives in [`osd-admin/lib/auth.js`](./osd-admin/lib/auth.js).

## Admin Content Actions

The admin app currently contains server actions for:

- creating and updating blog posts
- deleting blog posts
- updating and deleting enquiries
- replying to enquiries by email
- updating and deleting contacts
- saving testimonials
- saving site settings
- logging out

These live in [`osd-admin/lib/actions.js`](./osd-admin/lib/actions.js).

When blog/testimonial content changes, the admin app calls the public site's revalidation endpoint using:

- `PUBLIC_SITE_URL`
- `REVALIDATE_SECRET`

## Database Setup

The SQL setup files are in [`supabase`](./supabase).

Most important files:

- [`supabase/schema.sql`](./supabase/schema.sql)
  Base schema for enquiries, enquiry files, blog posts, and testimonials.
- [`supabase/admin-dashboard.sql`](./supabase/admin-dashboard.sql)
  Supplemental admin tables and columns.
- [`supabase/full-setup.sql`](./supabase/full-setup.sql)
- [`supabase/safe-guided-setup.sql`](./supabase/safe-guided-setup.sql)
- [`supabase/safe-step-1-tables.sql`](./supabase/safe-step-1-tables.sql)
- [`supabase/safe-step-2-columns.sql`](./supabase/safe-step-2-columns.sql)
- [`supabase/safe-step-3-rls.sql`](./supabase/safe-step-3-rls.sql)
- [`supabase/safe-step-4-admin-user.sql`](./supabase/safe-step-4-admin-user.sql)

Base tables documented in `schema.sql`:

- `enquiries`
- `enquiry_files`
- `blog_posts`
- `testimonials`

Supplemental admin-oriented tables:

- `admin_users`
- `contacts`
- `site_settings`

## Environment Variables

Create `.env.local` in the repo root for the public site.

### Public site environment

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

R2_ACCOUNT_ID=
R2_ACCESS_KEY_ID=
R2_SECRET_ACCESS_KEY=
R2_BUCKET_NAME=
R2_PUBLIC_URL=

SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=
COMPANY_EMAIL=
EMAIL_FROM=

REVALIDATE_SECRET=
NEXT_PUBLIC_SITE_SEARCH_URL=
```

Notes:

- the public site code prefers `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`
- some admin helpers can also fall back to `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `COMPANY_EMAIL` is the internal recipient for enquiry notifications
- `EMAIL_FROM` falls back to `SMTP_USER` if omitted in some mail helpers
- `REVALIDATE_SECRET` must match between public and admin apps if revalidation is used

Create `.env.local` inside `osd-admin/` for the admin dashboard.

### Admin app environment

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

R2_ACCOUNT_ID=
R2_ACCESS_KEY_ID=
R2_SECRET_ACCESS_KEY=
R2_BUCKET_NAME=
R2_PUBLIC_URL=

SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=
COMPANY_EMAIL=
EMAIL_FROM=

PUBLIC_SITE_URL=http://localhost:3000
REVALIDATE_SECRET=
ADMIN_EMAILS=
```

`ADMIN_EMAILS` accepts a comma-separated list of allowed admin email addresses.

## Installation

This repo is not using a workspace tool like Turborepo or pnpm workspaces. The public site and admin app manage dependencies separately.

Install the public app:

```bash
npm install
```

Install the admin app:

```bash
cd osd-admin
npm install
```

## Running Locally

Start the public site from the repo root:

```bash
npm run dev
```

Start the admin app:

```bash
npm run dev:admin
```

Default local URLs:

- public site: `http://localhost:3000`
- admin app: `http://localhost:3001`

## Available Scripts

### Root scripts

- `npm run dev`
  Start the public site on port `3000`.
- `npm run dev:admin`
  Start the admin site on port `3001`.
- `npm run build`
  Build the public site.
- `npm run start`
  Start the built public site.
- `npm run lint`
  Run ESLint across the root project.
- `npm run import:blogs`
  Run the blog import utility.

### Admin scripts

From `osd-admin/`:

- `npm run dev`
- `npm run build`
- `npm run start`

## Blog Import Utility

The repo includes [`scripts/import-blog-posts.mjs`](./scripts/import-blog-posts.mjs).

It reads environment variables, connects to Supabase with the service role key, and imports blog post data into the `blog_posts` table.

Run it from the root app:

```bash
npm run import:blogs
```

This script requires:

- `NEXT_PUBLIC_SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`

## Deployment Notes

### Public site

- configure all required environment variables
- make sure the R2 public URL is valid if remote media is used
- set `REVALIDATE_SECRET` if the admin app should trigger cache invalidation
- ensure Supabase tables and RLS policies are applied first

### Admin app

- deploy as a separate Next.js app
- point `PUBLIC_SITE_URL` to the deployed public site
- use the same `REVALIDATE_SECRET` as the public app
- seed at least one admin via `ADMIN_EMAILS`, `admin_users`, or `profiles`

## Current Behavior And Fallbacks

- products are currently served from local data
- many marketing sections still read directly from `src/data/site.js`
- blog and testimonials can fall back to static data if Supabase is unavailable
- enquiry submission requires Supabase to be configured
- file uploads only go to R2 when R2 credentials are configured
- emails only send when SMTP credentials are configured

## Important Files To Know First

- [`src/data/site.js`](./src/data/site.js)
- [`src/app/page.js`](./src/app/page.js)
- [`src/components/forms/QuoteForm.jsx`](./src/components/forms/QuoteForm.jsx)
- [`src/lib/validation.js`](./src/lib/validation.js)
- [`src/lib/blog-posts.js`](./src/lib/blog-posts.js)
- [`src/lib/mail.js`](./src/lib/mail.js)
- [`src/lib/r2.js`](./src/lib/r2.js)
- [`src/lib/supabase.js`](./src/lib/supabase.js)
- [`src/app/api/enquiries/route.js`](./src/app/api/enquiries/route.js)
- [`osd-admin/lib/auth.js`](./osd-admin/lib/auth.js)
- [`osd-admin/lib/actions.js`](./osd-admin/lib/actions.js)

## Project Status

This codebase already has a solid frontend and a meaningful backend foundation. The biggest remaining work is operational setup and content migration rather than rebuilding the UI.

Most likely next steps for a team adopting this repo are:

1. apply the Supabase SQL files
2. configure environment variables for both apps
3. verify enquiry submission, file upload, and email delivery
4. verify admin login and CRUD flows
5. migrate more content from `src/data/site.js` into Supabase as needed

## Supporting Documentation

Additional project notes are available in [`docs`](./docs):

- [`docs/frontend-backend-handoff.md`](./docs/frontend-backend-handoff.md)
- [`docs/backend-implementation-notes.md`](./docs/backend-implementation-notes.md)
- [`docs/admin-dashboard-handoff.md`](./docs/admin-dashboard-handoff.md)
- [`docs/redesign-notes.md`](./docs/redesign-notes.md)
