import { PageHero } from "@/components/shared/PageHero";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Terms & Conditions",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Terms"
        title="Commercial terms placeholder for a launch-ready frontend structure."
        text="This page rounds out the core route set and gives legal content a professional place in the experience."
      />
      <section className="section">
        <div className="container detail-card">
          <p>All pricing, sampling, production scheduling, approval checkpoints, and dispatch commitments should be confirmed in project-specific communication.</p>
          <p>This page is a frontend placeholder and should be replaced with final legal language before a public launch.</p>
        </div>
      </section>
    </>
  );
}
