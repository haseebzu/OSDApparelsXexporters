import { ServicesPageContent } from "@/components/services/ServicesPageContent";
import { buildBreadcrumbSchema, createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Apparel Manufacturing Services | OSD Apparels",
  description:
    "Explore OSD Apparels custom knitted and woven apparel manufacturing, from buyer-provided specifications and samples to production, quality checks, decoration, and shipping arrangements.",
  path: "/services",
  keywords: [
    "custom clothing manufacturer low MOQ",
    "private label manufacturing services",
    "apparel production services Pakistan",
  ],
  category: "Apparel Services",
});

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
]);

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }} />
      <ServicesPageContent />
    </>
  );
}
