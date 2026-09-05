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
      "First-time founders get clear production direction from the first conversation. OSD handles sourcing, development, and approvals in plain language so buyers know what is happening at every stage.",
      "The goal is simple. Your first collection should move with fewer mistakes, predictable costing, and no hidden process surprises between sample approval and export dispatch.",
    ],
    pills: [
      "Design to tech pack",
      "Fabric sourcing",
      "Sample development",
      "Production management",
      "Export and logistics",
    ],
    cta: { href: "/quote", label: "Start your launch enquiry" },
    side: {
      type: "timeline",
      items: ["Design", "Sourcing", "Tech pack", "Sampling", "Production / delivery"],
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
      "Cutting, stitching, washing, finishing, quality control, and packing are controlled inside one production system. Buyers do not need to split execution across multiple outside vendors.",
      "That means cleaner communication, better milestone discipline, and stronger control over output consistency before goods move into final dispatch and export documentation.",
    ],
    pills: [
      "Cutting and stitching",
      "Washing and finishing",
      "In-line QC",
      "Final inspection",
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
      "OSD manufactures to your exact program while protecting brand identity throughout development, approvals, labelling, and bulk execution. NDA-first handling is standard for private label and OEM orders.",
      "Labels, trims, packaging, fit comments, and specification details are all kept inside one controlled system so the final garment reflects your brand rather than a factory default.",
    ],
    pills: [
      "Custom woven labels",
      "Hangtag and packaging",
      "Tech pack support",
      "Design collaboration",
      "Brand NDA standard",
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
          title: "Full confidentiality",
          text: "NDA handling is built into buyer communication and production flow.",
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
      "Certified programs are handled with real documentation, real input control, and real production discipline. OSD supports buyers who need sustainable sourcing without vague marketing language.",
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
        title: "Sustainable Sourcing Commitment",
        text: "We prioritize eco-friendly materials like organic cotton, Tencel, hemp, and recycled fibers while partnering with suppliers who follow responsible production practices.",
        image: "/images/Eco friendly Fabric.jpg",
      },
      {
        title: "Transparent Supply Chain",
        text: "Our sourcing process emphasizes transparency and traceability, helping buyers verify fair labor standards, safer working conditions, and responsible manufacturing discipline.",
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
        text: "We support longer product lifecycles through better material choice, smarter sourcing, recyclable inputs, and responsible design direction where possible.",
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
      "Low MOQ support gives newer brands and test programs a practical way to start without forcing heavy inventory risk. Sampling and revision rounds are built into the front end of the production process.",
      "That keeps approvals cleaner, controls sample-stage mistakes earlier, and gives buyers a clear path from small launch order to future scale without hidden resampling charges.",
    ],
    pills: [
      "Low MOQ available",
      "Pre-production samples",
      "Fit and wash testing",
      "Revision rounds included",
      "Scalable to bulk",
    ],
    cta: { href: "/quote", label: "Ask about MOQ" },
    side: {
      type: "stats",
      items: [
        { value: "50 pcs", label: "low MOQ" },
        { value: "7 days", label: "sample turnaround" },
        { value: "Bulk ready", label: "full scalability" },
        { value: "0", label: "hidden resampling fees" },
      ],
    },
  },
  {
    id: "global-export",
    navLabel: "Global export",
    eyebrow: "Worldwide delivery",
    title: "Factory to your door, anywhere in the world",
    image: "/images/Shipments.jpg",
    paragraphs: [
      "OSD supports export handling from final packing through freight coordination, customs documentation, and shipment traceability. Buyers receive a cleaner handover rather than disconnected factory dispatch.",
      "The result is better shipment visibility, fewer paperwork problems, and stronger confidence when goods are moving across international buying routes and retail deadlines.",
    ],
    pills: [
      "50+ countries served",
      "Freight coordination",
      "Customs documentation",
      "Full traceability pack",
    ],
    cta: { href: "/contact", label: "Ask about shipping" },
    side: {
      type: "icons",
      items: [
        {
          icon: "Plane",
          title: "Global freight management",
          text: "Shipment coordination matched to buyer timelines and destination needs.",
        },
        {
          icon: "BadgeCheck",
          title: "Export documentation",
          text: "Commercial paperwork handled with the detail global buyers expect.",
        },
        {
          icon: "Boxes",
          title: "Full chain traceability",
          text: "Every shipment carries the export pack and dispatch-level visibility.",
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
            OSD Apparels supports custom clothing manufacturing with low MOQ flexibility, private-label development,
            production management, and worldwide shipment. This page shows the exact service blocks buyers use when
            they need dependable manufacturing support without production guesswork.
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
