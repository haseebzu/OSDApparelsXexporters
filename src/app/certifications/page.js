import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { certifications } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Certifications",
  path: "/certifications",
});

export default function CertificationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Certifications"
        title="Global trust signals presented with the visual weight they deserve."
        text="This page is designed to reassure brands, retailers, and sourcing managers who need evidence of responsible manufacturing alignment."
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
