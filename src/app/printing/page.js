import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { SectionIntro } from "@/components/shared/SectionIntro";
import { Reveal } from "@/components/shared/Reveal";
import { printingTechniques } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Printing & Decoration",
  path: "/printing",
});

export default function PrintingPage() {
  return (
    <>
      <PageHero
        eyebrow="Printing & Decoration"
        title="Any design. Any finish. Any brand direction."
        text="A modern printing page that explains capability clearly while keeping the UI premium and conversion-focused."
        primaryCta={{ href: "/quote", label: "Request Printing Quote" }}
        highlights={["Screen Print", "Embroidery", "Full Decoration Stack"]}
      />

      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Techniques"
            title="Decoration methods for simple brand marks through fully expressive graphics."
            text="Each card is structured so real production photography can be dropped in later without changing the layout system."
          />
          <div className="cards-grid">
            {printingTechniques.map((technique) => (
              <Reveal className="detail-card" key={technique.title}>
                <h3>{technique.title}</h3>
                <p>{technique.bestFor}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container two-col-grid">
          <Reveal>
            <SectionIntro
              eyebrow="Compatible Across Categories"
              title="The same visual language works for tees, hoodies, polos, uniforms, and activewear."
              text="That makes this page valuable both as a buyer education asset and as a lead-generation page."
              light
              align="left"
            />
          </Reveal>
          <Reveal className="detail-card">
            <h3>Need a private label version?</h3>
            <p>Combine printing, labels, trims, packaging, and garment construction inside a single OEM workflow.</p>
            <Link className="button button--gold button--compact" href="/custom-order">
              Explore Custom Orders
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
