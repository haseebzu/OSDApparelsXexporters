import { AdminCard } from "@/components/admin/AdminCard";
import { AdminEmptyState } from "@/components/admin/AdminEmptyState";
import { AdminToolbar } from "@/components/admin/AdminToolbar";
import { BlogManager } from "@/components/admin/BlogManager";
import { getBlogPosts } from "@/lib/admin-data";

export const metadata = {
  title: "Blog | OSD Admin",
};

export default async function BlogPage({ searchParams }) {
  const params = await searchParams;
  const data = await getBlogPosts({
    search: params?.search || "",
    status: params?.status || "",
  });

  return (
    <div className="admin-grid">
      <AdminCard title="Blog Posts" description="Manage drafts, publish articles, and keep the public blog in sync.">
        <AdminToolbar
          searchPlaceholder="Search posts by title, slug, or category"
          searchValue={params?.search || ""}
          searchName="search"
          filterName="status"
          filterValue={params?.status || ""}
          filterOptions={[
            { label: "All statuses", value: "" },
            { label: "Draft", value: "draft" },
            { label: "Published", value: "published" },
          ]}
        />

        {data.items.length ? (
          <BlogManager items={data.items} />
        ) : (
          <div className="admin-stack">
            <BlogManager items={[]} />
            <AdminEmptyState title="No blog posts yet" text="Create your first post from the modal editor." />
          </div>
        )}
      </AdminCard>
    </div>
  );
}
