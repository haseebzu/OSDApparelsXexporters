create extension if not exists pgcrypto;

create table if not exists public.enquiries (
  id uuid primary key default gen_random_uuid(),
  source_page text not null,
  name text not null,
  company text,
  email text not null,
  whatsapp text,
  country text,
  product_category text,
  quantity text,
  fabric text,
  decoration text,
  description text,
  status text not null default 'new',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists enquiries_status_idx on public.enquiries(status);
create index if not exists enquiries_created_at_idx on public.enquiries(created_at desc);

create table if not exists public.enquiry_files (
  id uuid primary key default gen_random_uuid(),
  enquiry_id uuid not null references public.enquiries(id) on delete cascade,
  file_name text not null,
  file_key text not null,
  file_url text not null,
  file_size integer,
  mime_type text,
  created_at timestamptz not null default now()
);

create index if not exists enquiry_files_enquiry_id_idx on public.enquiry_files(enquiry_id);

create table if not exists public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  category text,
  excerpt text,
  content text,
  feature_image text,
  seo_title text,
  seo_description text,
  og_image text,
  published boolean not null default false,
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  status text not null default 'draft',
  cover_image text
);

create table if not exists public.testimonials (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  company text,
  country text,
  avatar_url text,
  quote text not null,
  rating integer check (rating between 1 and 5),
  visible boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  status text not null default 'draft'
);

create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  family text,
  category text,
  subtitle text,
  description text,
  fabrics text[] default '{}',
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.admin_users (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  full_name text,
  created_at timestamptz not null default now()
);

create table if not exists public.contacts (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  company text,
  email text not null,
  whatsapp text,
  country text,
  message text not null,
  status text not null default 'new' check (status in ('new', 'reviewed', 'replied', 'closed')),
  admin_notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.site_settings (
  key text primary key,
  value text,
  updated_at timestamptz not null default now()
);

alter table public.enquiries
  add column if not exists admin_notes text,
  add column if not exists updated_at timestamptz not null default now();

alter table public.blog_posts
  add column if not exists status text not null default 'draft',
  add column if not exists cover_image text,
  add column if not exists updated_at timestamptz not null default now();

alter table public.testimonials
  add column if not exists status text not null default 'draft',
  add column if not exists avatar_url text,
  add column if not exists updated_at timestamptz not null default now();

alter table public.products
  add column if not exists subtitle text,
  add column if not exists active boolean not null default true,
  add column if not exists updated_at timestamptz not null default now();

alter table public.enquiries enable row level security;
alter table public.enquiry_files enable row level security;
alter table public.blog_posts enable row level security;
alter table public.testimonials enable row level security;
alter table public.products enable row level security;
alter table public.admin_users enable row level security;
alter table public.contacts enable row level security;
alter table public.site_settings enable row level security;

drop policy if exists "anon can insert enquiries" on public.enquiries;
create policy "anon can insert enquiries"
  on public.enquiries
  for insert
  to anon
  with check (true);

drop policy if exists "service role full access enquiries" on public.enquiries;
create policy "service role full access enquiries"
  on public.enquiries
  for all
  to service_role
  using (true)
  with check (true);

drop policy if exists "anon can insert files" on public.enquiry_files;
create policy "anon can insert files"
  on public.enquiry_files
  for insert
  to anon
  with check (true);

drop policy if exists "service role full access files" on public.enquiry_files;
create policy "service role full access files"
  on public.enquiry_files
  for all
  to service_role
  using (true)
  with check (true);

drop policy if exists "public can read published blog posts" on public.blog_posts;
create policy "public can read published blog posts"
  on public.blog_posts
  for select
  to anon, authenticated
  using (published = true);

drop policy if exists "service role full access blog posts" on public.blog_posts;
create policy "service role full access blog posts"
  on public.blog_posts
  for all
  to service_role
  using (true)
  with check (true);

drop policy if exists "public can read visible testimonials" on public.testimonials;
create policy "public can read visible testimonials"
  on public.testimonials
  for select
  to anon, authenticated
  using (visible = true);

drop policy if exists "service role full access testimonials" on public.testimonials;
create policy "service role full access testimonials"
  on public.testimonials
  for all
  to service_role
  using (true)
  with check (true);

drop policy if exists "service role full access products" on public.products;
create policy "service role full access products"
  on public.products
  for all
  to service_role
  using (true)
  with check (true);

drop policy if exists "admin users can read own allowlist" on public.admin_users;
create policy "admin users can read own allowlist"
on public.admin_users
for select
to authenticated
using (email = auth.jwt() ->> 'email');

drop policy if exists "admin users manage contacts" on public.contacts;
create policy "admin users manage contacts"
on public.contacts
for all
to authenticated
using (
  exists (
    select 1
    from public.admin_users
    where admin_users.email = auth.jwt() ->> 'email'
  )
)
with check (
  exists (
    select 1
    from public.admin_users
    where admin_users.email = auth.jwt() ->> 'email'
  )
);

drop policy if exists "admin users manage site settings" on public.site_settings;
create policy "admin users manage site settings"
on public.site_settings
for all
to authenticated
using (
  exists (
    select 1
    from public.admin_users
    where admin_users.email = auth.jwt() ->> 'email'
  )
)
with check (
  exists (
    select 1
    from public.admin_users
    where admin_users.email = auth.jwt() ->> 'email'
  )
);
