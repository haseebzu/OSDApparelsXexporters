import { PageHero } from "@/components/shared/PageHero";
import { ProcessTimeline } from "@/components/shared/ProcessTimeline";
import { Reveal } from "@/components/shared/Reveal";
import { SectionIntro } from "@/components/shared/SectionIntro";
import { processSteps } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "How It Works",
  path: "/how-it-works",
});

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="Process"
        title="A clear five-step journey from first inquiry to final delivery."
        text="This page now follows the cleaner workflow style from your reference, with a more polished and presentation-ready layout."
        highlights={["Inquiry", "Sampling", "Delivery"]}
      />

      <section className="section section--light">
        <div className="container">
          <SectionIntro
            eyebrow="Workflow"
            title="Clarity at each stage helps buyers commit faster."
            text="Each step is presented in a clean horizontal format so buyers can understand the process in seconds."
          />
          <ProcessTimeline steps={processSteps} />
          <div style={{ marginTop: "28px" }}>
            <Reveal className="detail-card">
              <h3>Why this layout is better</h3>
              <p>
                It feels more premium, easier to scan, and much closer to the professional B2B presentation style in
                the design you shared.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
