import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { SectionIntro } from "@/components/shared/SectionIntro";
import { factoryZones } from "@/data/site";
import { buildBreadcrumbSchema, createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Factory Tour | Apparel Manufacturer Pakistan | OSD",
  path: "/factory-tour",
  description:
    "Explore the production zones, workflow visibility, and factory environment behind OSD Apparels, an apparel manufacturer in Pakistan serving global buyers.",
  keywords: [
    "factory tour apparel manufacturer Pakistan",
    "garment factory Faisalabad",
    "apparel production facility Pakistan",
  ],
  category: "Factory Tour",
});

export default function FactoryTourPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Factory Tour", path: "/factory-tour" },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PageHero
        eyebrow="Factory Tour"
        title="A transparent walkthrough of the spaces where your garments are developed and finished."
        text="See the production zones, process flow, and factory environment that support OSD Apparels as an apparel manufacturer in Pakistan for global private-label and export buyers."
        highlights={["Production Zones", "Team Visibility", "Factory Confidence"]}
      />
      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Inside OSD"
            title="Six production zones buyers usually ask about first."
            text="Buyers usually want quick visibility into the teams, systems, and production areas that shape sampling, bulk execution, quality checks, and export readiness."
          />
          <div className="cards-grid">
            {factoryZones.map((zone) => (
              <Reveal className="detail-card" key={zone}>
                <h3>{zone}</h3>
                <p>Use this section to show real production imagery, team notes, and workflow proof that supports buyer confidence in execution.</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
