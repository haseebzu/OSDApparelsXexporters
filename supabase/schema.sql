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
  updated_at timestamptz not null default now()
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
  created_at timestamptz not null default now()
);

alter table public.enquiries enable row level security;
alter table public.enquiry_files enable row level security;
alter table public.blog_posts enable row level security;
alter table public.testimonials enable row level security;

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
