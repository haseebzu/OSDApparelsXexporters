# OSD Apparels Backend Implementation Notes

This file documents the backend foundation now added to the Next.js project.

## What Is Implemented

- `src/app/api/enquiries/route.js`
  - accepts `multipart/form-data`
  - validates enquiry inputs with `zod`
  - supports up to `5` reference image files
  - supports file size up to `10 MB` per file
  - stores enquiries in Supabase when configured
  - uploads reference files to Cloudflare R2 when configured
  - sends enquiry notification emails through Resend when configured
  - falls back safely in local development if backend secrets are not yet added

- `src/app/api/blog-posts/route.js`
  - exposes frontend blog data by API now
  - can switch to Supabase automatically when `blog_posts` table is available

- `src/app/api/testimonials/route.js`
  - exposes testimonials by API
  - supports `?visible=true`
  - can switch to Supabase automatically when configured

- `src/app/api/products/route.js`
  - exposes product data from the current frontend data model
  - supports filtering by `family` and `category`

## Shared Server Utilities

- `src/lib/supabase.js`
  - service-role Supabase admin client

- `src/utils/supabase/server.js`
  - SSR Supabase server client using request cookies

- `src/utils/supabase/client.js`
  - browser-side Supabase client helper

- `src/utils/supabase/middleware.js`
  - middleware helper to refresh Supabase auth sessions

- `src/proxy.js`
  - Next.js 16 session refresh entry using the new proxy convention

- `src/lib/r2.js`
  - Cloudflare R2 upload helper using S3-compatible SDK

- `src/lib/sendEnquiryEmail.js`
  - sends notification emails through Resend

- `src/emails/QuoteNotification.jsx`
  - HTML email template for enquiry alerts

## Frontend Integration Updated

- `src/components/forms/QuoteForm.jsx`
  - no longer uses EmailJS
  - now sends to `/api/enquiries`
  - uploads the actual selected files through `FormData`
  - preserves the existing UI and preview behavior

- source tagging added for each usage:
  - homepage
  - quote page
  - contact page
  - custom-order page

## Required Environment Variables

Copy `.env.example` to `.env.local` and fill:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `SUPABASE_SECRET_KEY` (optional extra server secret if you choose to use it later)
- `R2_ACCOUNT_ID`
- `R2_ACCESS_KEY_ID`
- `R2_SECRET_ACCESS_KEY`
- `R2_BUCKET_NAME`
- `R2_PUBLIC_URL`
- `RESEND_API_KEY`
- `EMAIL_FROM`
- `EMAIL_TO`

## Database Tables Expected

Backend currently expects these Supabase tables from the implementation plan:

- `enquiries`
- `enquiry_files`
- `blog_posts`
- `testimonials`

If these are not created yet, enquiry persistence will not work until the SQL from the backend plan is applied.

Ready-to-run schema file:

- `supabase/schema.sql`

## Recommended Next Backend Steps

1. Create the Supabase tables from the SQL plan.
2. Add `.env.local` credentials for Supabase, R2, and Resend.
3. Test a real enquiry submission with image upload.
4. Move blog and testimonials fully to Supabase content management.
5. Add admin authentication and dashboard flows in the next phase.
