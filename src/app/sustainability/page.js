import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { SectionIntro } from "@/components/shared/SectionIntro";
import { certifications } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Sustainability & Ethics",
  path: "/sustainability",
});

export default function SustainabilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Sustainability"
        title="Fashion that cares for people, process, and long-term brand trust."
        text="The sustainability page reinforces the ethical and quality positioning buyers increasingly expect from apparel suppliers."
        highlights={["Ethical Standards", "Audit Friendly", "Responsible Positioning"]}
      />
      <section className="section">
        <div className="container two-col-grid">
          <Reveal>
            <SectionIntro
              eyebrow="Ethics"
              title="Responsible manufacturing is part of the value proposition."
              text="We’ve structured this page to support buyer due diligence with clear language instead of vague marketing promises."
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
