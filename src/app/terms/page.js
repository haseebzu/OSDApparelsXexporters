import { PageHero } from "@/components/shared/PageHero";
import { buildBreadcrumbSchema, createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "OSD Apparels Commercial Terms | Manufacturing Orders",
  description:
    "Review OSD Apparels notes on pricing, sampling, production schedules, approvals, and dispatch commitments to confirm in manufacturing project discussions.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Terms & Conditions", path: "/terms" },
      ])).replace(/</g, "\\u003c") }} />
      <PageHero
        eyebrow="Terms"
        title="Commercial terms for manufacturing orders."
        text="Pricing, samples, production, approvals and dispatch are confirmed for each manufacturing project."
      />
      <section className="section">
        <div className="container detail-card">
          <p>All pricing, sampling, production scheduling, approval checkpoints, and dispatch commitments should be confirmed in project-specific communication.</p>
          <p>Final legal terms should be reviewed before an order is placed. Project-specific agreements take precedence over this overview.</p>
        </div>
      </section>
    </>
  );
}
