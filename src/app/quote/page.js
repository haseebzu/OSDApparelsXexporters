import { QuoteForm } from "@/components/forms/QuoteForm";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { buildBreadcrumbSchema, createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Get a Quote | Private Label Clothing Manufacturer",
  description:
    "Request a quote from OSD Apparels for private-label clothing manufacturing, custom development, bulk production, and export-ready apparel support.",
  path: "/quote",
  keywords: [
    "get a quote clothing manufacturer",
    "private label clothing manufacturer quote",
    "apparel manufacturing quote Pakistan",
  ],
  category: "Lead Generation",
});

export default function QuotePage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Quote", path: "/quote" },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PageHero
        eyebrow="Quote Form"
        title="Get a quote for private-label clothing manufacturing and export-ready production."
        text="Share your product requirements with OSD Apparels and we will shape the right sampling, costing, and production plan for your buying team."
      />
      <section className="section section--light">
        <div className="container quote-layout">
          <QuoteForm sourcePage="quote" />
          <Reveal className="side-panel">
            <h3>What happens next</h3>
            <div className="stack-list">
              <span>We review the enquiry and product requirements.</span>
              <span>We prepare pricing, timing, and production notes.</span>
              <span>We follow up with the next recommended step.</span>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
