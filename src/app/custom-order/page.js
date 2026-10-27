import Image from "next/image";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { printingTechniques } from "@/data/site";
import { buildBreadcrumbSchema, createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Private Label Clothing Manufacturer | OSD Apparels OEM",
  description:
    "Build your collection with OSD Apparels, a private label clothing manufacturer in Pakistan. Share a tech pack, reference garment, drawing, or photo for sampling, custom labels, packaging, and quoted shipping arrangements.",
  path: "/custom-order",
  keywords: [
    "private label clothing manufacturer",
    "custom OEM clothing manufacturer Pakistan",
    "custom garment manufacturer Pakistan",
  ],
  category: "Custom Manufacturing",
});

const customizationCards = [
  {
    title: "Custom Design / Style",
    image: "/images/custom d.png",
    points: [
      "Fully customized garment design based on your concept, sketch, or reference sample",
      "Specialist-team support for pattern development, sizing, and sampling",
      "Fabric, trims, colors, and finishes tailored to your brand identity",
      "Custom samples charged according to the product",
      "Buyer sample approval before bulk production",
    ],
  },
  {
    title: "Custom Sizing",
    image: "/images/customm Sizingg.png",
    points: [
      "Sizing support based on your product requirements",
      "Share a tech pack, reference garment, drawing, or photograph",
      "Pattern development and sizing support from a specialist team",
      "Custom samples charged according to the product",
      "Buyer sample approval before bulk production",
    ],
  },
  {
    title: "Shipping Arrangements",
    image: "/images/WORLDWIDEShupping.jpg",
    points: [
      "Shipping can be arranged to more than 50 countries",
      "Choose shipping arranged by OSD or your own shipping arrangements",
      "DDP delivery can be quoted where available",
      "Your quotation confirms the agreed shipping terms",
      "Your quotation confirms included costs and delivery estimate",
    ],
  },
  {
    title: "Custom Label / Tag",
    image: "/images/Label and tags.jpg",
    points: [
      "Custom labels, tags, and packaging available",
      "Private-label options for your project",
      "Requirements confirmed with your quotation",
    ],
  },
  {
    title: "Custom Print",
    image: "/images/Custom Printing.png",
    points: [
      "Screen printing, puff printing, DTG, sublimation, and heat transfer available",
      "Garment washing and finishing available",
      "The appropriate method depends on the garment, fabric, and requested result",
      "Custom samples charged according to the product",
      "Buyer sample approval before bulk production",
    ],
  },
  {
    title: "Custom Embroidery",
    image: "/images/embrodirey custom.png",
    points: [
      "Embroidery available for custom apparel projects",
      "The appropriate method depends on the garment, fabric, and requested result",
      "Custom samples charged according to the product",
      "Buyer sample approval before bulk production",
    ],
  },
  {
    title: "Custom Cut & Sew",
    image: "/images/cut and sew.jpg",
    points: [
      "Custom knitted and woven apparel manufacturing",
      "Buyers provide their garment and customization requirements",
      "Pattern development, sizing, and sampling support",
      "Quality checks form part of the manufacturing process",
    ],
  },
];

const oemStages = [
  {
    number: "Step One",
    title: "Concept Review",
    description: "We align on target market, styling direction, price target, and development scope before the first sample move.",
    image: "/images/Cooncept Review.jpg",
  },
  {
    number: "Step Two",
    title: "Sampling",
    description: "Custom samples are charged according to the product and must be approved before bulk production.",
    image: "/images/SamplingOEM.jpg",
  },
  {
    number: "Step Three",
    title: "Bulk Execution",
    description: "Approved samples move into bulk production, with quality checks forming part of the manufacturing process.",
    image: "/images/production.png",
  },
  {
    number: "Step Four",
    title: "Final QA",
    description: "Finishing, packing, labelling, and shipping arrangements are confirmed for the agreed order.",
    image: "/images/Quality check.png",
  },
  {
    number: "Step Five",
    title: "Export Delivery",
    description: "Choose shipping arranged by OSD or your own shipping arrangements; your quotation confirms the agreed terms and delivery estimate.",
    image: "/images/deliveryOEM.jpg",
  },
];

const oemProof = [
  "Private label labels, tags, and packaging handled in one workflow",
  "Sampling before bulk to reduce approval risk",
  "Decoration, trims, and fit details aligned to your market",
  "Export-ready communication for global buying teams",
];

export default function CustomOrderPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Custom Order", path: "/custom-order" },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }} />
      <PageHero
        eyebrow="Custom OEM"
        title="Custom fashion apparel manufacturing for private label, OEM, and export programs."
        text="Build your garments with a private-label clothing manufacturer in Pakistan. Share a tech pack, reference garment, drawing, or photograph for pattern development, sizing, sampling, decoration, labels, packaging, and shipping arrangements."
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
              Built for private-label brands, retailers, and import buyers who need a clear view of how OSD Apparels
              supports pattern development, sizing, samples, decoration, custom labels, packaging, and bulk production.
            </p>
          </Reveal>

          <div className="custom-order__grid">
            {customizationCards.map((card, index) => (
              <Reveal className={`custom-order-card${index === 0 || index === 2 ? " custom-order-card--wide" : ""}`} delay={index * 0.04} key={card.title}>
                <div className="custom-order-card__media">
                  <Image
                    src={card.image}
                    alt={`${card.title} for private label apparel at OSD Apparels`}
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
              development, sample approval, decoration, shipping arrangements, and bulk execution without turning
              the experience into operational clutter.
            </p>
          </Reveal>

          <div className="oem-journey__cards">
            {oemStages.map((step, index) => (
              <Reveal className="oem-journey-card" delay={index * 0.05} key={step.title}>
                <div className="oem-journey-card__media">
                  <Image
                    src={step.image}
                    alt={`${step.title} stage of custom garment production at OSD Apparels`}
                    fill
                    sizes="(max-width: 720px) 100vw, (max-width: 1080px) 50vw, 33vw"
                    className="oem-journey-card__image"
                  />
                </div>
                <div className="oem-journey-card__body">
                  <span className="oem-journey-card__step">{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>

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

      <section className="section">
        <div className="container">
          <Reveal className="custom-order__intro">
            <p className="section-eyebrow">Printing & Decoration</p>
            <div className="section-accent" />
            <h2 className="section-title">Decoration methods for private label, OEM, and custom apparel production.</h2>
            <p className="section-text">
              Custom order programs often depend on the right print or embroidery finish. This section keeps the
              decoration options visible inside the same workflow as sizing, labels, packaging, and shipping planning.
            </p>
          </Reveal>

          <div className="printing-techniques-grid">
            {printingTechniques.map((technique, index) => (
              <Reveal
                className={`printing-technique-card printing-technique-card--${technique.tone || "light"}`}
                delay={index * 0.04}
                key={technique.title}
              >
                <div className="printing-technique-card__media">
                  <Image
                    src={technique.image}
                    alt={`${technique.title} for custom garment decoration at OSD Apparels`}
                    fill
                    sizes="(max-width: 720px) 88vw, (max-width: 1080px) 44vw, 30vw"
                    className="printing-technique-card__image"
                  />
                </div>
                <div className="printing-technique-card__body">
                  <span className="printing-technique-card__eyebrow">Printing Method</span>
                  <h3>{technique.title}</h3>
                  <p>{technique.bestFor}</p>
                </div>
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
              Send a tech pack, reference garment, drawing, photograph, or specification details. Custom samples are
              charged according to the product and require your approval before bulk production.
            </p>
          </Reveal>

          <QuoteForm sourcePage="custom-order" />
        </div>
      </section>
    </>
  );
}
