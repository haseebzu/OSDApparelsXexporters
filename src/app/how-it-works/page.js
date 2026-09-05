import { PageHero } from "@/components/shared/PageHero";
import { ProcessTimeline } from "@/components/shared/ProcessTimeline";
import { Reveal } from "@/components/shared/Reveal";
import { SectionIntro } from "@/components/shared/SectionIntro";
import { processSteps } from "@/data/site";
import { buildBreadcrumbSchema, createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Private Label Clothing Manufacturing Process | OSD OEM",
  path: "/how-it-works",
  description:
    "Follow the OSD Apparels private label clothing manufacturing process, from enquiry and sample approval to bulk production, quality checks, and export delivery.",
  keywords: [
    "how private label clothing manufacturing works",
    "apparel production process Pakistan",
    "garment sampling and delivery workflow",
  ],
  category: "Process",
});

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "How It Works", path: "/how-it-works" },
]);

export default function HowItWorksPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }} />
      <PageHero
        eyebrow="Process"
        title="A clear five-step private-label clothing manufacturing journey from enquiry to delivery."
        text="This page shows how OSD Apparels guides buyers through enquiry, sampling, production, final quality control, and export-ready delivery with a cleaner manufacturing workflow."
        highlights={["Inquiry", "Sampling", "Delivery"]}
      />

      <section className="section section--light">
        <div className="container">
          <SectionIntro
            eyebrow="Workflow"
            title="Clarity at each stage helps buyers commit faster."
            text="Each step is presented in a clean horizontal format so buyers can understand the apparel manufacturing process, approval rhythm, and delivery flow in seconds."
          />
          <ProcessTimeline steps={processSteps} />
          <div style={{ marginTop: "28px" }}>
            <Reveal className="detail-card">
              <h3>Why this layout is better</h3>
              <p>
                It feels more premium, easier to scan, and much closer to the professional B2B presentation global
                buyers expect from a private-label clothing manufacturer.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
