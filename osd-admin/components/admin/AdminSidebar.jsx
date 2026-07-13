"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FileText,
  LayoutDashboard,
  MessageSquare,
  Quote,
  Settings,
  Star,
} from "lucide-react";

const groups = [
  {
    title: "Overview",
    items: [{ href: "/admin", label: "Dashboard", icon: LayoutDashboard }],
  },
  {
    title: "Leads",
    items: [
      { href: "/admin/quotes", label: "Quotes", icon: Quote },
      { href: "/admin/contacts", label: "Contacts", icon: MessageSquare },
    ],
  },
  {
    title: "Content",
    items: [
      { href: "/admin/blog", label: "Blog", icon: FileText },
      { href: "/admin/testimonials", label: "Testimonials", icon: Star },
      { href: "/admin/settings", label: "Settings", icon: Settings },
    ],
  },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="admin-sidebar">
      <div className="admin-sidebar__brand">
        <span>OSD Apparels</span>
        <strong>Admin</strong>
      </div>

      <div className="admin-sidebar__nav">
        {groups.map((group) => (
          <div className="admin-sidebar__group" key={group.title}>
            <div className="admin-sidebar__group-title">{group.title}</div>
            {group.items.map((item) => {
              const Icon = item.icon;
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  className={`admin-sidebar__link${active ? " is-active" : ""}`}
                  href={item.href}
                  key={item.href}
                >
                  <Icon size={18} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        ))}
      </div>

      <div className="admin-sidebar__meta">
        <p>
          Separate admin app scaffolded inside the repo with live enquiry, contact, and publishing controls tied to the
          public site.
        </p>
      </div>
    </aside>
  );
}
