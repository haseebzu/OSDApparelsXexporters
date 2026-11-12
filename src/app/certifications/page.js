import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { certifications } from "@/data/site";
import { buildBreadcrumbSchema, createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Garment Requirement Review | OSD Apparels",
  path: "/certifications",
  description:
    "Discuss apparel material, documentation and destination requirements with OSD Apparels before sampling and quotation.",
  keywords: [
    "garment manufacturing requirements",
    "apparel compliance Pakistan",
    "apparel documentation Pakistan",
  ],
  category: "Certifications",
});

export default function CertificationsPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Certifications", path: "/certifications" },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }} />
      <PageHero
        eyebrow="Requirements review"
        title="Product documentation and requirements to confirm before manufacturing."
        text="OSD does not claim GOTS or any other certification on this site without current proof. Share the requirements your order must meet for review before sampling."
        highlights={["Buyer Requirements", "Documentation Review", "Product Discussion"]}
      />
      <section className="section">
        <div className="container">
          <h2 className="visually-hidden">Standards discussed with buyers</h2>
          <div className="cards-grid">
          {certifications.map((item) => (
            <Reveal className="detail-card" key={item.name}>
              <p className="section-eyebrow">{item.name}</p>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </Reveal>
          ))}
          </div>
        </div>
      </section>
    </>
  );
}
