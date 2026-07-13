alter table if exists public.enquiries enable row level security;
alter table if exists public.enquiry_files enable row level security;
alter table if exists public.blog_posts enable row level security;
alter table if exists public.testimonials enable row level security;
alter table if exists public.products enable row level security;
alter table if exists public.admin_users enable row level security;
alter table if exists public.contacts enable row level security;
alter table if exists public.site_settings enable row level security;

create policy "anon can insert enquiries"
  on public.enquiries
  for insert
  to anon
  with check (true);

create policy "service role full access enquiries"
  on public.enquiries
  for all
  to service_role
  using (true)
  with check (true);

create policy "anon can insert files"
  on public.enquiry_files
  for insert
  to anon
  with check (true);

create policy "service role full access files"
  on public.enquiry_files
  for all
  to service_role
  using (true)
  with check (true);

create policy "public can read published blog posts"
  on public.blog_posts
  for select
  to anon, authenticated
  using (published = true);

create policy "service role full access blog posts"
  on public.blog_posts
  for all
  to service_role
  using (true)
  with check (true);

create policy "public can read visible testimonials"
  on public.testimonials
  for select
  to anon, authenticated
  using (visible = true);

create policy "service role full access testimonials"
  on public.testimonials
  for all
  to service_role
  using (true)
  with check (true);

create policy "service role full access products"
  on public.products
  for all
  to service_role
  using (true)
  with check (true);

create policy "admin users can read own allowlist"
on public.admin_users
for select
to authenticated
using (email = auth.jwt() ->> 'email');

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
