"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BadgeCheck,
  Boxes,
  Factory,
  Leaf,
  Plane,
  Rocket,
  ScanSearch,
  Shirt,
  Tags,
} from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";

const iconMap = {
  Rocket,
  Factory,
  Tags,
  Leaf,
  Boxes,
  Plane,
  Shirt,
  BadgeCheck,
  ScanSearch,
};

const serviceSections = [
  {
    id: "launching-brands",
    navLabel: "Launching brands",
    eyebrow: "New brands",
    title: "Your first collection, done right from day one",
    image: "/images/custom d.png",
    paragraphs: [
      "First-time founders get clear production direction from the first conversation. OSD explains garment specifications, development, and approvals in plain language so buyers know what is happening at every stage.",
      "The goal is simple. Your first collection should move with fewer mistakes, predictable costing, and no hidden process surprises between sample approval and export dispatch.",
    ],
    pills: [
      "Design to tech pack",
      "Fabric selection",
      "Sample development",
      "Production management",
      "Export and logistics",
    ],
    cta: { href: "/quote", label: "Start your launch enquiry" },
    side: {
      type: "timeline",
      items: ["Design", "Materials", "Tech pack", "Sampling", "Production / delivery"],
      quote:
        "OSD made the first order easier to understand. We always knew the next step, the next sample action, and the final shipment target.",
      quoteMeta: "Founder, startup womenswear label",
    },
  },
  {
    id: "full-scope-manufacturing",
    navLabel: "Full-scope manufacturing",
    eyebrow: "Core service",
    title: "End-to-end apparel manufacturing, managed for you",
    image: "/images/full scope.jpg",
    paragraphs: [
      "OSD manufactures custom knitted and woven apparel to the garment and customization requirements buyers provide, from development through bulk production.",
      "Quality checks form part of the manufacturing process. Confirm the requirements for your garment, fabric, decoration, and order quantity when requesting a quote.",
    ],
    pills: [
      "Cutting and stitching",
      "Washing and finishing",
      "Quality checks",
      "Bulk production",
      "Export packing",
    ],
    cta: { href: "/quote", label: "Ask about lead times" },
    side: {
      type: "stats",
      items: [
        { value: "5,000+", label: "kg knitted daily" },
        { value: "200k+", label: "units annually" },
        { value: "5+", label: "years experience" },
        { value: "50+", label: "countries served" },
      ],
    },
  },
  {
    id: "private-label-and-oem",
    navLabel: "Private label and OEM",
    eyebrow: "Brand building",
    title: "Your brand on every label - private label and OEM without compromise",
    image: "/images/Label and tags.jpg",
    paragraphs: [
      "OSD manufactures private-label and OEM garments to buyer-provided requirements, with custom labels, tags, and packaging available for the project.",
      "Buyers can provide a tech pack, reference garment, drawing, or photograph. NDAs are available, and the quotation can confirm the relevant project details.",
    ],
    pills: [
      "Custom woven labels",
      "Hangtag and packaging",
      "Tech pack support",
      "Design collaboration",
      "NDAs available",
    ],
    cta: { href: "/quote", label: "Start a private label enquiry" },
    side: {
      type: "icons",
      items: [
        {
          icon: "Tags",
          title: "Full private labelling",
          text: "Brand labels, tags, and packaging aligned to your garment program.",
        },
        {
          icon: "Shirt",
          title: "Tech pack to production",
          text: "Specification details stay connected from sample review to bulk run.",
        },
        {
          icon: "BadgeCheck",
          title: "NDA available",
          text: "Ask about an NDA when discussing your product requirements.",
        },
      ],
    },
  },
  {
    id: "sustainable-production",
    navLabel: "Sustainable production",
    eyebrow: "Sustainability",
    title: "Certified sustainable from yarn to finished garment - not just a claim",
    image: "/images/Sustainability.jpg",
    paragraphs: [
      "Certified programs are handled with real documentation, real input control, and real production discipline. Buyers can discuss material and documentation requirements for their manufacturing project.",
      "GRS, RCS, GOTS, Oeko-Tex Class 1, and audited operating standards help buyers verify the production story from material stage through the finished export shipment.",
    ],
    pills: [
      "GRS certified",
      "RCS certified",
      "GOTS certified",
      "Oeko-Tex Class 1",
      "WRAP certified",
      "BSCI audited",
    ],
    cta: { href: "/certifications", label: "Explore certifications" },
    side: {
      type: "icons",
      items: [
        {
          icon: "Leaf",
          title: "Recycled yarns end-to-end",
          text: "Sustainable material programs tracked through the garment workflow.",
        },
        {
          icon: "Factory",
          title: "Water-saving dye technology",
          text: "Jet dyeing support built around better process efficiency and control.",
        },
        {
          icon: "ScanSearch",
          title: "Third-party audited",
          text: "Audit visibility is available for buyers who need verification confidence.",
        },
      ],
    },
    highlights: [
      {
        title: "Material Selection",
        text: "We prioritize eco-friendly materials like organic cotton, Tencel, hemp, and recycled fibers while partnering with suppliers who follow responsible production practices.",
        image: "/images/Eco friendly Fabric.jpg",
      },
      {
        title: "Transparent Supply Chain",
        text: "Discuss your traceability and production-documentation requirements with OSD when defining the garment specifications.",
        image: "/images/Transperant supplly chain.jpg",
      },
      {
        title: "Reducing Environmental Impact",
        text: "We actively support lower water and energy use by working with mills and production partners that implement efficient technologies and cleaner process controls.",
        image: "/images/reducing envoirment impact.jpg",
      },
      {
        title: "Innovation In Sustainable Textiles",
        text: "Through ongoing research, development, and supplier collaboration, we help buyers access newer eco-conscious materials and more responsible textile options.",
        image: "/images/sus.png",
      },
      {
        title: "Circular Economy And Responsible Design",
        text: "We support longer product lifecycles through better material choice, production planning, recyclable inputs, and responsible design direction where possible.",
        image: "/images/Circular Economy.jpg",
      },
      {
        title: "Commitment, Certification, And Impact",
        text: "OSD works with certification-led programs such as GOTS, OEKO-TEX, and recycled content standards while maintaining transparency around progress and accountability.",
        image: "/images/Commitment, Certification.jpg",
      },
    ],
  },
  {
    id: "low-moq-and-sampling",
    navLabel: "Low MOQ and sampling",
    eyebrow: "Accessibility",
    title: "Start with a small order, scale when you're ready",
    image: "/images/Low moq.jpg",
    paragraphs: [
      "Minimum order starts at 30 pieces. Confirm the quantity breakdown for your design, colours and sizes when requesting a quote.",
      "Custom samples are charged according to the product, and buyers approve a sample before bulk production.",
    ],
    pills: [
      "Low MOQ available",
      "Pre-production samples",
      "Custom samples",
      "Sample approval",
      "Bulk orders",
    ],
    cta: { href: "/quote", label: "Ask about MOQ" },
    side: {
      type: "stats",
      items: [
        { value: "30 pcs", label: "minimum order starts" },
        { value: "Product-based", label: "sample charge" },
        { value: "Required", label: "sample approval" },
        { value: "Quote", label: "quantity breakdown" },
      ],
    },
  },
  {
    id: "global-export",
    navLabel: "Global export",
    eyebrow: "Worldwide delivery",
    title: "Shipping arrangements for international orders",
    image: "/images/Shipments.jpg",
    paragraphs: [
      "Shipping can be arranged to more than 50 countries. Choose shipping arranged by OSD or your own shipping arrangements.",
      "DDP delivery can be quoted where available. Your quotation will confirm the agreed shipping terms, included costs, and delivery estimate.",
    ],
    pills: [
      "50+ countries available",
      "OSD-arranged shipping",
      "Buyer-arranged shipping",
      "DDP quoted where available",
    ],
    cta: { href: "/contact", label: "Ask about shipping" },
    side: {
      type: "icons",
      items: [
        {
          icon: "Plane",
          title: "Shipping arrangements",
          text: "Choose shipping arranged by OSD or your own shipping arrangements.",
        },
        {
          icon: "BadgeCheck",
          title: "Quote-specific terms",
          text: "Your quotation confirms the agreed shipping terms, included costs, and delivery estimate.",
        },
        {
          icon: "Boxes",
          title: "DDP where available",
          text: "DDP delivery can be quoted subject to the destination and agreed quotation.",
        },
      ],
    },
  },
];

function SidePanel({ side }) {
  if (side.type === "timeline") {
    return (
      <div className="services-page__side-stack">
        <div className="services-page__timeline">
          {side.items.map((item, index) => (
            <div className="services-page__timeline-item" key={item}>
              <span>{`0${index + 1}`}</span>
              <strong>{item}</strong>
            </div>
          ))}
        </div>
        <blockquote className="services-page__quote">
          <p>{side.quote}</p>
          <footer>{side.quoteMeta}</footer>
        </blockquote>
      </div>
    );
  }

  if (side.type === "stats") {
    return (
      <div className="services-page__stats">
        {side.items.map((item) => (
          <div className="services-page__stat-card" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="services-page__icon-grid">
      {side.items.map((item) => {
        const Icon = iconMap[item.icon];
        return (
          <div className="services-page__icon-card" key={item.title}>
            <span className="services-page__icon-wrap">{Icon ? <Icon size={16} strokeWidth={1.8} /> : null}</span>
            <div>
              <strong>{item.title}</strong>
              <p>{item.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function ServicesPageContent() {
  const [activeId, setActiveId] = useState(serviceSections[0].id);

  const activeService = useMemo(
    () => serviceSections.find((section) => section.id === activeId) ?? serviceSections[0],
    [activeId],
  );

  return (
    <section className="section services-page">
      <div className="container">
        <Reveal className="services-page__intro">
          <p className="section-eyebrow">What we offer</p>
          <div className="section-accent" />
          <h1 className="services-page__title">Custom clothing manufacturing services built for low-MOQ and export buyers</h1>
          <p className="services-page__subtitle">
            OSD Apparels manufactures custom knitted and woven apparel for bulk orders from brands, retailers, and
            other businesses. Minimum order starts at 30 pieces; confirm the quantity breakdown for your design,
            colours and sizes when requesting a quote.
          </p>
        </Reveal>

        <div className="services-page__cylinders" aria-label="Service categories">
          <div className="services-page__cylinders-track" aria-hidden="true" />
          {serviceSections.map((section) => (
            <button
              aria-pressed={activeId === section.id}
              className={`services-page__cylinder${activeId === section.id ? " on" : ""}`}
              key={section.id}
              onClick={() => setActiveId(section.id)}
              type="button"
            >
              <span>{section.navLabel}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="services-page__panel on"
            exit={{ opacity: 0, y: 18 }}
            initial={{ opacity: 0, y: 18 }}
            key={activeService.id}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <div className="services-page__panel-copy">
              <p className="services-page__panel-eyebrow">{activeService.eyebrow}</p>
              <h2>{activeService.title}</h2>
              <div className="services-page__panel-text">
                {activeService.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="services-page__pill-row">
                {activeService.pills.map((pill) => (
                  <span className="services-page__pill" key={pill}>
                    {pill}
                  </span>
                ))}
              </div>

              <div className="services-page__cta-row">
                <Link className="button button--gold services-page__cta services-page__cta--primary" href={activeService.cta.href}>
                  {activeService.cta.label}
                </Link>
                <Link className="button button--outline services-page__cta services-page__cta--secondary" href="/custom-order">
                  Explore custom order
                </Link>
              </div>
            </div>

            <div className="services-page__panel-side">
              <div className="services-page__panel-media">
                <Image
                  alt={`${activeService.title} for OSD Apparels clothing manufacturing`}
                  className="services-page__panel-image"
                  fill
                  sizes="(max-width: 980px) 100vw, 34vw"
                  src={activeService.image}
                />
              </div>
              <SidePanel side={activeService.side} />
            </div>

            {activeService.highlights?.length ? (
              <div className="services-page__highlights">
                {activeService.highlights.map((item, index) => (
                  <Reveal className="services-page__highlight-card" delay={index * 0.05} key={item.title}>
                    <div className="services-page__highlight-media">
                      <Image
                        alt={`${item.title} for private label apparel production`}
                        className="services-page__highlight-image"
                        fill
                        sizes="(max-width: 760px) 100vw, (max-width: 1180px) 50vw, 33vw"
                        src={item.image}
                      />
                    </div>
                    <div className="services-page__highlight-copy">
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            ) : null}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
