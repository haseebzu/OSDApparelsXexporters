import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { SectionIntro } from "@/components/shared/SectionIntro";
import { certifications } from "@/data/site";
import { buildBreadcrumbSchema, createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Sustainable Apparel Manufacturing Pakistan | OSD Apparels",
  path: "/sustainability",
  description:
    "Explore OSD Apparels approach to sustainable apparel manufacturing in Pakistan, with responsible sourcing, ethical production, and supply chain transparency.",
  keywords: [
    "sustainable clothing manufacturer Pakistan",
    "ethical garment manufacturer Pakistan",
    "sustainable apparel sourcing Pakistan",
  ],
  category: "Sustainability",
});

export default function SustainabilityPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Sustainability", path: "/sustainability" },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }} />
      <PageHero
        eyebrow="Sustainability"
        title="Sustainable clothing manufacturing in Pakistan, supported by process and proof."
        text="OSD Apparels supports buyers looking for ethical sourcing conversations, responsible garment production, and stronger sustainability positioning across private-label and export programs."
        highlights={["Ethical Standards", "Audit Friendly", "Responsible Positioning"]}
      />
      <section className="section">
        <div className="container two-col-grid">
          <Reveal>
            <SectionIntro
              eyebrow="Ethics"
              title="Responsible manufacturing is part of the value proposition."
              text="We have structured this page to support buyer due diligence with clear language around responsible sourcing, safer production practices, and documentation expectations that global teams can evaluate with confidence."
              align="left"
            />
          </Reveal>
          <Reveal className="detail-card">
            <h3>Focus Areas</h3>
            <div className="check-list">
              <span>Responsible sourcing conversations</span>
              <span>Safe workplace expectations</span>
              <span>Quality systems that reduce waste</span>
              <span>Audit-friendly documentation culture</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--light">
        <div className="container cards-grid">
          {certifications.map((item) => (
            <Reveal className="detail-card" key={item.name}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
