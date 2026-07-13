import { redirect } from "next/navigation";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { AdminTopbar } from "@/components/admin/AdminTopbar";
import { getCurrentAdminUser } from "@/lib/auth";

export default async function AdminLayout({ children }) {
  const user = await getCurrentAdminUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="admin-layout">
      <AdminSidebar />
      <div className="admin-main">
        <AdminTopbar user={user} />
        <div className="admin-content">{children}</div>
      </div>
    </div>
  );
}
