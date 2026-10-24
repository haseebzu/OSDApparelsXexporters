import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { SectionIntro } from "@/components/shared/SectionIntro";
import { buildBreadcrumbSchema, createMetadata } from "@/lib/metadata";

const minimumOrderText = "Our minimum order starts at 50 pieces. The exact minimum depends on the style, fabric and decoration. Tell us your quantity and we confirm it in your quote.";

export const metadata = createMetadata({
  title: "Custom Hoodie Manufacturer Pakistan | OSD Apparels",
  description: "Custom hoodies made in Faisalabad, Pakistan, with fabric, fit, decoration, labels and packaging options. Request a quote.",
  path: "/products/hoodies",
  images: [{ url: "/images/HOODIES DETAIL.jpg", alt: "Three hoodies in brown, grey and white hanging from a rail" }],
  category: "Hoodie Manufacturing",
});

const optionGroups = [
  {
    title: "Style, fit and construction",
    items: ["Pullover, zip-up, oversized, boxy, cropped and longline directions", "Heavyweight builds, kangaroo pockets and hood construction", "Men's, women's, unisex and kids sizing; a tech pack or measurements can guide the brief"],
  },
  {
    title: "Fabric, colour and weight",
    items: ["Cotton fleece, French terry and cotton-polyester blend requests", "Brushed-back or loop-back constructions", "Buyer-specified GSM, Pantone matching, lab dips, colour approvals and garment dye", "Organic or recycled options"],
  },
  {
    title: "Decoration and finishing",
    items: ["Screen print, puff, high-density, DTF or transfer, DTG and embroidery", "Flat, 3D or applique embroidery; woven or PVC patches", "Sublimation where the fabric allows, reflective, foil or rhinestone details", "Enzyme, stone, acid, distressed, brushed or pigment-dye finishes"],
  },
  {
    title: "Trims, labels and packaging",
    items: ["Drawcords, aglets, eyelets, zippers, ribbing, cuffs and pocket details", "Woven or printed neck labels, care and size labels, and hang tags", "Polybags and branded packaging"],
  },
];

const faqItems = [
  ["What is the minimum order quantity for custom hoodies?", minimumOrderText],
  ["Can a buyer specify fabric weight and fit?", "Yes. Include the intended GSM, fit, size range, measurements or tech pack in the quote request so the requirements can be reviewed."],
  ["What should be included in a hoodie quote request?", "Share the product, quantity, fabric and fit, colours, decoration and placement, labels and packaging, destination country, and target date."],
];

export default function HoodiesProductPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ name: "Home", path: "/" }, { name: "Products", path: "/products" }, { name: "Hoodies", path: "/products/hoodies" }]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }} />
      <PageHero
        eyebrow="Custom Hoodies"
        title="Custom Hoodie Manufacturer in Pakistan"
        text="OSD Apparels manufactures custom hoodies in Faisalabad, Pakistan for fashion brands. Share the product brief and the order details can be confirmed in the quote."
        primaryCta={{ href: "/quote", label: "Request a Quote" }}
        highlights={["Your Brand, Your Way", "Buyer-Led Specifications", "Quote-Driven Details"]}
      />

      <section className="section">
        <div className="container custom-order__grid">
          <Reveal className="custom-order-card custom-order-card--wide">
            <div className="custom-order-card__media">
              <Image src="/images/HOODIES DETAIL.jpg" alt="Three hoodies in brown, grey and white hanging from a rail" fill sizes="(max-width: 767px) 100vw, 66vw" className="custom-order-card__image" />
            </div>
            <div className="custom-order-card__body">
              <h2>Build the hoodie around your brief</h2>
              <p>Specify the silhouette, fabric direction, weight, fit, colours, decoration, trims, labels and packaging that matter to the collection.</p>
            </div>
          </Reveal>
          <Reveal className="detail-card" delay={0.1}>
            <div className="custom-order-card__body">
              <h3>Minimum order quantity</h3>
              <p>{minimumOrderText}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <SectionIntro eyebrow="Customisation" title="Details to include in the hoodie brief" text="The requested specifications guide the quote." />
          <div className="cards-grid">
            {optionGroups.map((group, index) => (
              <Reveal className="detail-card" delay={index * 0.05} key={group.title}>
                <div className="custom-order-card__body"><h3>{group.title}</h3><div className="custom-order-card__list">{group.items.map((item) => <span key={item}>{item}</span>)}</div></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionIntro eyebrow="How the quote works" title="Send the project details that affect the quotation" text="Send the hoodie product, quantity, fabric and fit, colours, decoration and placement, labels and packaging, destination country and target date. OSD reviews the requirements and confirms the order details in the quote." />
          <div className="button-row"><Link className="button button--gold" href="/quote">Request a Quote</Link></div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <SectionIntro eyebrow="Buyer questions" title="Common hoodie quotation questions" />
          <div className="cards-grid">{faqItems.map(([question, answer], index) => <Reveal className="detail-card" delay={index * 0.05} key={question}><div className="custom-order-card__body"><h3>{question}</h3><p>{answer}</p></div></Reveal>)}</div>
          <div className="button-row"><Link className="button button--outline" href="/products/mens">Browse Menswear</Link><Link className="button button--outline" href="/custom-order">Plan a Custom Order</Link><Link className="button button--outline" href="/services">Explore Services</Link><Link className="button button--outline" href="/quote">Request a Quote</Link><Link className="button button--outline" href="/blog/custom-hoodie-manufacturing-guide">Read the Hoodie Guide</Link></div>
        </div>
      </section>
    </>
  );
}
