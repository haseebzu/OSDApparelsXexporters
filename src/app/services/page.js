import { ServicesPageContent } from "@/components/services/ServicesPageContent";
import { buildBreadcrumbSchema, buildFaqSchema, createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Custom Clothing Manufacturer Low MOQ | OSD Services",
  description:
    "Explore OSD Apparels services as a custom clothing manufacturer with low MOQ support, private-label development, production management, and export delivery.",
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

const faqSchema = buildFaqSchema([
  {
    question: "Can OSD Apparels support low-MOQ custom clothing manufacturing?",
    answer:
      "Yes. OSD Apparels supports low-MOQ development so newer brands and test programs can start with cleaner production planning before scaling into larger repeat orders.",
  },
  {
    question: "Does OSD Apparels handle private-label development from concept to shipment?",
    answer:
      "Yes. The services workflow covers concept support, sourcing, labels, trims, sampling, production management, and export coordination inside one manufacturing system.",
  },
  {
    question: "What happens before bulk production starts?",
    answer:
      "Before bulk execution, OSD Apparels aligns on sourcing direction, tech packs, trims, fit comments, labels, and sample approval so the production plan is clearer and easier to control.",
  },
  {
    question: "Can buyers request printing, embroidery, and custom branding in the same order?",
    answer:
      "Yes. OSD Apparels supports decoration methods such as printing, embroidery, private-label tags, and packaging inside the same custom manufacturing workflow.",
  },
  {
    question: "Does OSD Apparels help with export and delivery?",
    answer:
      "Yes. OSD Apparels supports export packing, freight coordination, customs documentation, and shipment visibility for global buying teams.",
  },
]);

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ServicesPageContent />
    </>
  );
}
