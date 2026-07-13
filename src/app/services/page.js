import { ServicesPageContent } from "@/components/services/ServicesPageContent";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Services",
  path: "/services",
});

export default function ServicesPage() {
  return <ServicesPageContent />;
}
