-- OSD Admin Dashboard supplemental schema
-- Apply after the base schema.sql and after Supabase connectivity is fixed.

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

alter table public.admin_users enable row level security;
alter table public.contacts enable row level security;
alter table public.site_settings enable row level security;

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
