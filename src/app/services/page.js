import { ServicesPageContent } from "@/components/services/ServicesPageContent";
import { buildBreadcrumbSchema, createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Low MOQ Clothing Manufacturer Services | OSD Apparels",
  description:
    "Explore OSD Apparels clothing manufacturing services: low MOQ from 50 pieces per style, fabric sourcing, sampling, quality checks, and export coordination.",
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
