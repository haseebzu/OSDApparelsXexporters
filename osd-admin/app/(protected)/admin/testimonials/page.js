import { AdminCard } from "@/components/admin/AdminCard";
import { AdminEmptyState } from "@/components/admin/AdminEmptyState";
import { TestimonialEditorForm } from "@/components/admin/TestimonialEditorForm";
import { StatusBadge } from "@/components/admin/StatusBadge";
import { getTestimonials } from "@/lib/admin-data";

export const metadata = {
  title: "Testimonials | OSD Admin",
};

export default async function TestimonialsPage() {
  const data = await getTestimonials();
  const currentItem = data.items[0] || null;

  return (
    <div className="admin-grid admin-grid--split">
      <AdminCard title="Testimonials" description="Approve, hide, or edit client quotes used on the public site.">
        {data.items.length ? (
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Client</th>
                  <th>Country</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {data.items.map((item) => (
                  <tr key={item.id || item.name}>
                    <td>
                      <div className="admin-table__title">
                        <strong>{item.client_name || item.name}</strong>
                        <span>{item.company || item.role}</span>
                      </div>
                    </td>
                    <td>{item.country || "Not provided"}</td>
                    <td>
                      <StatusBadge value={item.status || (item.visible ? "published" : "draft")} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <AdminEmptyState title="No testimonials yet" text="Use the form on the right to create your first testimonial record." />
        )}
      </AdminCard>

      <AdminCard title={currentItem ? "Edit Testimonial" : "New Testimonial"} description="Keep testimonial visibility and copy in sync with the live site.">
        <TestimonialEditorForm testimonial={currentItem} />
      </AdminCard>
    </div>
  );
}
