import { PageHero } from "@/components/shared/PageHero";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Privacy Policy",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy Policy"
        title="Clear handling expectations for enquiries and business communication."
        text="This frontend includes polished policy pages so the site feels complete and launch-ready."
      />
      <section className="section">
        <div className="container detail-card">
          <p>OSD Apparels collects only the information required to respond to enquiries, prepare quotes, and support business communication.</p>
          <p>Contact data is handled for commercial follow-up, internal review, and project coordination. It is not presented here as a legal final draft and should be reviewed before launch.</p>
        </div>
      </section>
    </>
  );
}
