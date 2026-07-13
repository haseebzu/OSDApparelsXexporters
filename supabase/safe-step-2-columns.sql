alter table if exists public.enquiries
  add column if not exists admin_notes text,
  add column if not exists updated_at timestamptz not null default now();

alter table if exists public.blog_posts
  add column if not exists status text not null default 'draft',
  add column if not exists cover_image text,
  add column if not exists updated_at timestamptz not null default now();

alter table if exists public.testimonials
  add column if not exists avatar_url text,
  add column if not exists status text not null default 'draft',
  add column if not exists updated_at timestamptz not null default now();

alter table if exists public.products
  add column if not exists subtitle text,
  add column if not exists active boolean not null default true,
  add column if not exists updated_at timestamptz not null default now();
