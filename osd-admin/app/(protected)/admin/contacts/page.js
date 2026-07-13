import { AdminCard } from "@/components/admin/AdminCard";
import { AdminEmptyState } from "@/components/admin/AdminEmptyState";
import { AdminInlineStats } from "@/components/admin/AdminInlineStats";
import { AdminToolbar } from "@/components/admin/AdminToolbar";
import { ContactManager } from "@/components/admin/ContactManager";
import { getContacts } from "@/lib/admin-data";

export const metadata = {
  title: "Contacts | OSD Admin",
};

export default async function ContactsPage({ searchParams }) {
  const params = await searchParams;
  const data = await getContacts({
    search: params?.search || "",
    status: params?.status || "",
  });

  return (
    <AdminCard title="Contact Messages" description="Review contact submissions, read full messages, and manage follow-up status from one place.">
      <AdminInlineStats
        items={[
          { label: "Total Contacts", value: data.summary.total, tone: "muted" },
          { label: "New", value: data.summary.new, tone: "new" },
          { label: "Reviewed", value: data.summary.reviewed, tone: "reviewed" },
          { label: "Closed", value: data.summary.closed, tone: "closed" },
        ]}
      />

      <AdminToolbar
        searchPlaceholder="Search contact records"
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
        <ContactManager items={data.items} />
      ) : (
        <AdminEmptyState
          title="No contact records found"
          text="Once your public contact flow writes into the dedicated contacts table, full submissions will appear here automatically."
        />
      )}
    </AdminCard>
  );
}
