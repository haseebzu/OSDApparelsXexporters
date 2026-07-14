import { PageHero } from "@/components/shared/PageHero";
import { ProcessTimeline } from "@/components/shared/ProcessTimeline";
import { Reveal } from "@/components/shared/Reveal";
import { SectionIntro } from "@/components/shared/SectionIntro";
import { processSteps } from "@/data/site";
import { buildBreadcrumbSchema, buildFaqSchema, createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "How It Works | Private Label Clothing Manufacturer",
  path: "/how-it-works",
  description:
    "Understand the private-label clothing manufacturing workflow at OSD Apparels, from enquiry and sampling to production, final QC, and export delivery.",
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

const faqSchema = buildFaqSchema([
  {
    question: "What information should buyers share at the enquiry stage?",
    answer:
      "Buyers should share their product requirements, reference images, quantity targets, and key development notes so OSD Apparels can guide the right sampling and production route.",
  },
  {
    question: "When does sampling happen in the production process?",
    answer:
      "Sampling happens early in the workflow, before bulk commitment, so patterns, approvals, fit feedback, and construction decisions are cleaner before production starts.",
  },
  {
    question: "How does OSD Apparels manage quality control during production?",
    answer:
      "OSD Apparels uses milestone visibility, in-process monitoring, and final quality control before dispatch so buyers have clearer confidence in bulk execution.",
  },
  {
    question: "What happens after production is complete?",
    answer:
      "After production, garments move through final quality control, packing review, and export-ready delivery coordination so shipments are better prepared for handover.",
  },
  {
    question: "Is the process designed for global buyers?",
    answer:
      "Yes. The workflow is built for international buying teams that need clearer communication, organized approvals, and export delivery support from one manufacturing partner.",
  },
]);

export default function HowItWorksPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
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
