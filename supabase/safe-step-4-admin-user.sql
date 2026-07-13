insert into public.admin_users (email, full_name)
values ('osdapparels@gmail.com', 'OSD Admin')
on conflict (email) do update
set full_name = excluded.full_name;
