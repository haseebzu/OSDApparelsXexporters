import { AdminCard } from "@/components/admin/AdminCard";
import { SettingsForm } from "@/components/admin/SettingsForm";
import { getSettingsSnapshot } from "@/lib/admin-data";

export const metadata = {
  title: "Settings | OSD Admin",
};

export default async function SettingsPage() {
  const data = await getSettingsSnapshot();

  return (
    <div className="admin-grid admin-grid--split">
      <AdminCard title="Admin Settings" description="Control admin-only metadata and prepare site settings for the next CMS phase.">
        <SettingsForm settings={data.settings} />
      </AdminCard>

      <AdminCard title="Current Status" description="Known integration blockers and environment notes for this dashboard.">
        <div className="admin-detail-list">
          <div className="admin-detail">
            <span>Supabase Connectivity</span>
            <p>{data.blocker || "No blocker detected in code, but verify live DNS and credentials before production use."}</p>
          </div>
          <div className="admin-detail">
            <span>Public Site Sync</span>
            <p>Configured to use the public app&apos;s protected revalidation endpoint once `PUBLIC_SITE_URL` and `REVALIDATE_SECRET` are set.</p>
          </div>
          <div className="admin-detail">
            <span>Auth Model</span>
            <p>Supabase Auth with admin allowlisting through `admin_users`, `profiles`, or the `ADMIN_EMAILS` fallback.</p>
          </div>
        </div>
      </AdminCard>
    </div>
  );
}
