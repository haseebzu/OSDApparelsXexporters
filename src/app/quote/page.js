import { QuoteForm } from "@/components/forms/QuoteForm";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Request a Quote",
  path: "/quote",
});

export default function QuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Quote Form"
        title="Tell us what you want and we will shape the right production plan."
        text="A high-intent lead page with a premium form layout, fast validation, and clean follow-up messaging."
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
