import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { SectionIntro } from "@/components/shared/SectionIntro";
import { buildBreadcrumbSchema, createMetadata } from "@/lib/metadata";

const minimumOrderText = "Our minimum order starts at 50 pieces. The exact minimum depends on the style, fabric and decoration. Tell us your quantity and we confirm it in your quote.";

export const metadata = createMetadata({
  title: "Custom T-Shirt Manufacturer Pakistan | OSD Apparels",
  description: "Custom T-shirts made in Faisalabad, Pakistan, with fabric, fit, decoration, labels and packaging options. Request a quote.",
  path: "/products/t-shirts",
  images: [{ url: "/images/men over-sized t shirt -2.png", alt: "Five graphic T-shirts hanging on a black clothing rail" }],
  category: "T-Shirt Manufacturing",
});

const optionGroups = [
  {
    title: "Style, fit and sizing",
    items: ["Crew neck, V-neck, long sleeve, raglan, tank, oversized, boxy, cropped and heavyweight directions", "Men's, women's, unisex and kids sizing; a tech pack, measurements or custom size chart can guide the brief", "Buyer-specified fit, size range and garment measurements"],
  },
  {
    title: "Fabric, colour and weight",
    items: ["Single jersey, slub, interlock and rib requests", "Combed, ring-spun or carded cotton directions and blend requests", "Buyer-specified GSM, Pantone matching, lab dips, colour approvals and garment dye", "Organic options"],
  },
  {
    title: "Neck, construction and decoration",
    items: ["Rib or binding necks, taped necks, shoulder tape and double-needle hems", "Screen print, puff, high-density, DTF or transfer, DTG and embroidery", "Sublimation where the fabric allows, reflective, foil, rhinestone and special finishes", "Enzyme, stone, acid, distressed, brushed or pigment-dye washes"],
  },
  {
    title: "Labels and packaging",
    items: ["Woven or printed neck labels, care and size labels, and hang tags", "Polybags and branded packaging", "Placement and artwork references for print or embroidery"],
  },
];

const faqItems = [
  ["What is the minimum order quantity for custom T-shirts?", minimumOrderText],
  ["Can I request a particular fit or neck construction?", "Yes. Send measurements, a tech pack or reference images with the required fit, neck and construction details."],
  ["What details help OSD prepare a T-shirt quote?", "Share the product, quantity, fabric and fit, colours, decoration and placement, labels and packaging, destination country and target date."],
];

export default function TShirtsProductPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ name: "Home", path: "/" }, { name: "Products", path: "/products" }, { name: "T-Shirts", path: "/products/t-shirts" }]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }} />
      <PageHero
        eyebrow="Custom T-Shirts"
        title="Custom T-Shirt Manufacturer in Pakistan"
        text="OSD Apparels manufactures custom T-shirts in Faisalabad, Pakistan for fashion brands. Share the product brief and the order details can be confirmed in the quote."
        primaryCta={{ href: "/quote", label: "Request a Quote" }}
        highlights={["Your Brand, Your Way", "Buyer-Led Specifications", "Quote-Driven Details"]}
      />

      <section className="section">
        <div className="container custom-order__grid">
          <Reveal className="custom-order-card custom-order-card--wide">
            <div className="custom-order-card__media">
              <Image src="/images/men over-sized t shirt -2.png" alt="Five graphic T-shirts hanging on a black clothing rail" fill sizes="(max-width: 767px) 100vw, 66vw" className="custom-order-card__image" />
            </div>
            <div className="custom-order-card__body"><h2>Build the T-shirt around your brief</h2><p>Specify the silhouette, fabric direction, weight, fit, colours, decoration, neck construction, labels and packaging that matter to the collection.</p></div>
          </Reveal>
          <Reveal className="detail-card" delay={0.1}><div className="custom-order-card__body"><h3>Minimum order quantity</h3><p>{minimumOrderText}</p></div></Reveal>
        </div>
      </section>

      <section className="section section--soft"><div className="container"><SectionIntro eyebrow="Customisation" title="Details to include in the T-shirt brief" text="The requested specifications guide the quote." /><div className="cards-grid">{optionGroups.map((group, index) => <Reveal className="detail-card" delay={index * 0.05} key={group.title}><div className="custom-order-card__body"><h3>{group.title}</h3><div className="custom-order-card__list">{group.items.map((item) => <span key={item}>{item}</span>)}</div></div></Reveal>)}</div></div></section>

      <section className="section"><div className="container"><SectionIntro eyebrow="How the quote works" title="Send the project details that affect the quotation" text="Send the T-shirt product, quantity, fabric and fit, colours, decoration and placement, labels and packaging, destination country and target date. OSD reviews the requirements and confirms the order details in the quote." /><div className="button-row"><Link className="button button--gold" href="/quote">Request a Quote</Link></div></div></section>

      <section className="section section--soft"><div className="container"><SectionIntro eyebrow="Buyer questions" title="Common T-shirt quotation questions" /><div className="cards-grid">{faqItems.map(([question, answer], index) => <Reveal className="detail-card" delay={index * 0.05} key={question}><div className="custom-order-card__body"><h3>{question}</h3><p>{answer}</p></div></Reveal>)}</div><div className="button-row"><Link className="button button--outline" href="/products/mens">Browse Menswear</Link><Link className="button button--outline" href="/custom-order">Plan a Custom Order</Link><Link className="button button--outline" href="/services">Explore Services</Link><Link className="button button--outline" href="/quote">Request a Quote</Link><Link className="button button--outline" href="/blog/fabric-gsm-guide-tshirts-hoodies-sportswear">Read the Fabric GSM Guide</Link></div></div></section>
    </>
  );
}
