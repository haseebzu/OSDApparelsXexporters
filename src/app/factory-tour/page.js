import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { SectionIntro } from "@/components/shared/SectionIntro";
import { factoryZones } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Factory Tour",
  path: "/factory-tour",
});

export default function FactoryTourPage() {
  return (
    <>
      <PageHero
        eyebrow="Factory Tour"
        title="A transparent walkthrough of the spaces where your garments are developed and finished."
        text="This layout is ready for future video embeds and photography while still looking complete today."
        highlights={["Production Zones", "Team Visibility", "Factory Confidence"]}
      />
      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Inside OSD"
            title="Six production zones buyers usually ask about first."
            text="The structure matches the brief and gives you a clear place to plug in real media later."
          />
          <div className="cards-grid">
            {factoryZones.map((zone) => (
              <Reveal className="detail-card" key={zone}>
                <h3>{zone}</h3>
                <p>Replace this panel with production imagery, team notes, or embedded video walkthrough content.</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
