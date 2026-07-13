import { AdminCard } from "@/components/admin/AdminCard";
import { AdminEmptyState } from "@/components/admin/AdminEmptyState";
import { AdminStatusBreakdown } from "@/components/admin/AdminStatusBreakdown";
import { AdminStatCard } from "@/components/admin/AdminStatCard";
import { AdminVolumeChart } from "@/components/admin/AdminVolumeChart";
import { StatusBadge } from "@/components/admin/StatusBadge";
import { getDashboardData } from "@/lib/admin-data";
import { BarChart3, BookOpenText, Clock3, MessageSquareMore } from "lucide-react";

export const metadata = {
  title: "Dashboard | OSD Admin",
};

export default async function DashboardPage() {
  const data = await getDashboardData();

  return (
    <div className="admin-grid">
      {data.blocker ? <div className="admin-note">{data.blocker}</div> : null}

      <div className="admin-grid admin-grid--stats">
        <AdminStatCard
          icon={MessageSquareMore}
          label="Total Enquiries"
          meta="Quotes and contact-style submissions"
          trend={{ label: "All channels", tone: "muted" }}
          value={data.stats.totalEnquiries}
        />
        <AdminStatCard
          featured
          icon={Clock3}
          label="Pending Replies"
          meta="New + reviewed waiting for follow-up"
          trend={{ label: "Needs action", tone: "warning" }}
          value={data.stats.pendingReplies}
        />
        <AdminStatCard
          icon={BarChart3}
          label="Response Rate"
          meta="Based on replied vs total enquiries"
          trend={{ label: "Workflow health", tone: "success" }}
          value={data.stats.responseRate}
        />
        <AdminStatCard
          icon={BookOpenText}
          label="Blog Posts"
          meta={`${data.stats.blogDrafts} drafts currently pending`}
          trend={{ label: "Publishing", tone: "muted" }}
          value={data.stats.blogPosts}
        />
      </div>

      <div className="admin-grid admin-grid--dashboard">
        <AdminCard>
          <AdminVolumeChart series={data.volumeSeries} />
        </AdminCard>

        <AdminCard>
          <AdminStatusBreakdown items={data.statusBreakdown} />
        </AdminCard>
      </div>

      <div className="admin-grid admin-grid--dashboard">
        <AdminCard
          title="Recent Enquiries"
          description="Latest quote requests and contact-style submissions entering the system."
        >
          {data.recentEnquiries.length ? (
            <div className="admin-table-wrap">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Contact</th>
                    <th>Category</th>
                    <th>Status</th>
                    <th>Submitted</th>
                  </tr>
                </thead>
                <tbody>
                  {data.recentEnquiries.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <div className="admin-table__title">
                          <strong>{item.name}</strong>
                          <span>{item.email}</span>
                        </div>
                      </td>
                      <td>{item.product_category || "General enquiry"}</td>
                      <td>
                        <StatusBadge value={item.status || "new"} />
                      </td>
                      <td>{item.submittedLabel}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <AdminEmptyState
              title="No enquiries loaded yet"
              text="Once Supabase connectivity is restored, the latest submissions will appear here automatically."
            />
          )}
        </AdminCard>

        <AdminCard title="Activity Feed" description="Recent admin-relevant signals from content and enquiry workflow.">
          {data.activity.length ? (
            <div className="admin-activity">
              {data.activity.map((item) => (
                <div className="admin-activity__item" key={item.id}>
                  <div className="admin-activity__icon" aria-hidden="true">
                    {item.title.charAt(0)}
                  </div>
                  <div className="admin-activity__content">
                    <strong>{item.title}</strong>
                    <p>{item.text}</p>
                    <span>{item.meta}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <AdminEmptyState
              title="No activity yet"
              text="This feed will populate with new enquiries, publication actions, and state changes once live data is available."
            />
          )}
        </AdminCard>
      </div>
    </div>
  );
}
