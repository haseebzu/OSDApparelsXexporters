import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { certifications } from "@/data/site";
import { buildBreadcrumbSchema, createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Garment Manufacturing Standards & Certifications | OSD",
  path: "/certifications",
  description:
    "Explore the apparel quality, organic textile, and ethical sourcing standards featured by OSD Apparels to guide manufacturing discussions with global buyers.",
  keywords: [
    "garment manufacturer certifications",
    "apparel compliance Pakistan",
    "certified garment exporter Pakistan",
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
        eyebrow="Certifications"
        title="Certifications and compliance signals that support confident apparel sourcing."
        text="This page helps brands, retailers, and sourcing managers review the audit standards and manufacturing signals they expect before placing export apparel orders."
        highlights={["GOTS", "SEDEX", "ISO Driven Trust"]}
      />
      <section className="section">
        <div className="container cards-grid">
          {certifications.map((item) => (
            <Reveal className="detail-card" key={item.name}>
              <p className="section-eyebrow">{item.name}</p>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
