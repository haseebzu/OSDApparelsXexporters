import { AdminCard } from "@/components/admin/AdminCard";
import { AdminEmptyState } from "@/components/admin/AdminEmptyState";
import { AdminInlineStats } from "@/components/admin/AdminInlineStats";
import { AdminToolbar } from "@/components/admin/AdminToolbar";
import { QuoteManager } from "@/components/admin/QuoteManager";
import { buildEnquirySummary, getEnquiries } from "@/lib/admin-data";

export const metadata = {
  title: "Quotes | OSD Admin",
};

export default async function QuotesPage({ searchParams }) {
  const params = await searchParams;
  const data = await getEnquiries({
    search: params?.search || "",
    status: params?.status || "",
  });
  const summary = buildEnquirySummary(data.items);

  return (
    <div className="admin-grid">
      <AdminCard title="Quote Enquiries" description="Search, review, update, and reply to incoming quote requests.">
        <AdminInlineStats
          items={[
            { label: "Total Quotes", value: summary.total, tone: "muted" },
            { label: "New", value: summary.new, tone: "new" },
            { label: "Awaiting Reply", value: summary.awaitingReply, tone: "reviewed" },
            { label: "Replied This Week", value: summary.repliedThisWeek, tone: "replied" },
          ]}
        />

        <AdminToolbar
          searchPlaceholder="Search by name, company, email, or reference"
          searchValue={params?.search || ""}
          searchName="search"
          filterName="status"
          filterValue={params?.status || ""}
          filterOptions={[
            { label: "All statuses", value: "" },
            { label: "New", value: "new" },
            { label: "Reviewed", value: "reviewed" },
            { label: "Replied", value: "replied" },
            { label: "Closed", value: "closed" },
          ]}
        />

        {data.items.length ? (
          <QuoteManager items={data.items} />
        ) : (
          <AdminEmptyState title="No quotes found" text="Try a different search or status filter." />
        )}
      </AdminCard>
    </div>
  );
}
