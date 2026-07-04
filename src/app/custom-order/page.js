import Image from "next/image";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { PageHero } from "@/components/shared/PageHero";
import { ProcessTimeline } from "@/components/shared/ProcessTimeline";
import { Reveal } from "@/components/shared/Reveal";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Custom OEM & Private Label",
  path: "/custom-order",
});

const customizationCards = [
  {
    title: "Custom Design / Style",
    image: "/images/hero-menswear.png",
    points: [
      "Fully customized garment design based on your concept, sketch, or reference sample",
      "In-house development support for silhouettes, fits, and fashion details",
      "Fabric, trims, colors, and finishes tailored to your brand identity",
      "Sampling and prototype development before bulk production",
      "Suitable for private label and brand-exclusive styles",
    ],
  },
  {
    title: "Custom Sizing",
    image: "/images/hero-kidswear.png",
    points: [
      "Flexible size charts based on your target market (US, EU, UK, AU, Asia, Arab countries)",
      "Made-to-measure size grading available",
      "Plus-size and extended-size programs supported",
      "Fit samples provided for approval before production",
      "Consistent measurement control across bulk orders",
    ],
  },
  {
    title: "Shipping Around The World",
    image: "/images/hero-factory.png",
    points: [
      "Worldwide shipping by air and sea freight",
      "Support with major courier and logistics partners",
      "Export documentation handled by our team",
      "Buyer-nominated forwarders welcome",
      "Flexible Incoterms (EXW, FOB, CIF, DDP options available)",
      "Consolidated and bulk shipment handling",
    ],
  },
  {
    title: "Custom Label / Tag",
    image: "/images/hoodie-brown.jpeg",
    points: [
      "Private label main tags with your brand name and logo",
      "Custom woven and printed labels",
      "Hang tags, size tags, care labels, and barcode stickers",
      "Sustainable label options available on request",
      "Brand-compliant packaging and tagging solutions",
    ],
  },
  {
    title: "Custom Print",
    image: "/images/streetwear.jpeg",
    points: [
      "Multiple printing techniques available: screen print, puff print, DTF, DTG, sublimation",
      "Pantone color matching support",
      "Special effects prints (high-density, rubber, vintage wash, cracked)",
      "Wash-tested print durability standards",
      "Sampling for print approval before bulk run",
    ],
  },
  {
    title: "Custom Embroidery",
    image: "/images/hoodie-gray.jpeg",
    points: [
      "Flat, 3D, puff, and applique embroidery options",
      "High stitch-definition logo embroidery",
      "Chest, sleeve, back, and panel placements available",
      "Digitizing support for new logos",
      "Production sampling to verify stitch quality",
    ],
  },
  {
    title: "Custom Cut & Sew",
    image: "/images/factory-overview.png",
    points: [
      "Complete cut & sew manufacturing from raw fabric to finished garment",
      "Panel-based construction and complex styles supported",
      "Pattern making and marker planning included",
      "Multi-fabric and multi-panel garment capability",
      "Strict quality control at each production stage",
    ],
  },
];

const oemStages = [
  { number: "1.", title: "Concept Review", description: "We align on target market, styling direction, price target, and development scope.", icon: "FileText" },
  { number: "2.", title: "Sampling", description: "Patterns, fit comments, labels, trims, and reference standards are confirmed before bulk.", icon: "SwatchBook" },
  { number: "3.", title: "Bulk Execution", description: "Approved styles move into production with milestone visibility and quality checkpoints.", icon: "Factory" },
  { number: "4.", title: "Final QA", description: "Finishing, packing, labeling, and shipment readiness are reviewed before dispatch.", icon: "ShieldCheck" },
  { number: "5.", title: "Export Delivery", description: "Documentation and logistics support are coordinated for smooth international handover.", icon: "PlaneTakeoff" },
];

const oemProof = [
  "Private label labels, tags, and packaging handled in one workflow",
  "Sampling before bulk to reduce approval risk",
  "Decoration, trims, and fit details aligned to your market",
  "Export-ready communication for global buying teams",
];

export default function CustomOrderPage() {
  return (
    <>
      <PageHero
        eyebrow="Custom OEM"
        title="Custom fashion apparel manufacturing for private label, OEM, and export programs."
        text="Build your garments with a manufacturing partner that supports concept development, sizing, trims, printing, embroidery, packaging, and worldwide shipment under one professional workflow."
        primaryCta={{ href: "/quote", label: "Request Free Quote" }}
        secondaryCta={{ href: "/contact", label: "Talk To Our Team" }}
      />

      <section className="section">
        <div className="container">
          <Reveal className="custom-order__intro">
            <p className="section-eyebrow">Customization Options</p>
            <div className="section-accent" />
            <h2 className="section-title">Everything needed for a modern custom apparel manufacturing program.</h2>
            <p className="section-text">
              This page is structured for buyers who need a clearer view of what can be customized across product
              development, production, branding, and export handling.
            </p>
          </Reveal>

          <div className="custom-order__grid">
            {customizationCards.map((card, index) => (
              <Reveal className={`custom-order-card${index === 0 || index === 2 ? " custom-order-card--wide" : ""}`} delay={index * 0.04} key={card.title}>
                <div className="custom-order-card__media">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 720px) 100vw, (max-width: 1080px) 50vw, 33vw"
                    className="custom-order-card__image"
                  />
                </div>
                <div className="custom-order-card__body">
                  <h3>{card.title}</h3>
                  <div className="custom-order-card__list">
                    {card.points.map((point) => (
                      <span key={point}>{point}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container oem-journey">
          <Reveal className="oem-journey__intro">
            <p className="section-eyebrow">OEM Journey</p>
            <div className="section-accent" />
            <h2 className="section-title">A numbered custom-order process that keeps buyer expectations visible from sample to shipment.</h2>
            <p className="section-text">
              The strongest OEM pages reduce uncertainty. This one is built to show how OSD handles product
              development, approvals, decoration, and bulk execution without turning the experience into operational
              clutter.
            </p>
          </Reveal>

          <ProcessTimeline steps={oemStages} />

          <div className="oem-proof-grid">
            {oemProof.map((item, index) => (
              <Reveal className="oem-proof-card" delay={index * 0.05} key={item}>
                <span />
                <p>{item}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container quote-layout">
          <Reveal>
            <p className="section-eyebrow">Request Custom Order</p>
            <div className="section-accent" />
            <h2 className="section-title">Share your product idea and we will shape the right development and production plan.</h2>
            <p className="section-text">
              Send your concept, sketch, sample reference, or specification details and our team will guide you through
              sampling, costing, and export-ready production.
            </p>
          </Reveal>

          <QuoteForm sourcePage="custom-order" />
        </div>
      </section>
    </>
  );
}
