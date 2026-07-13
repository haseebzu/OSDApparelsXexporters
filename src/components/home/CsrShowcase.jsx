"use client";

import { useState } from "react";
import Image from "next/image";
import { Reveal } from "@/components/shared/Reveal";

const csrItems = [
  {
    id: "women",
    label: "Women Empowerment",
    title: "Women empowerment through work, dignity, and long-term opportunity.",
    text:
      "OSD Apparels believes apparel manufacturing should open real opportunities for women through employment, skill-building, stability, and greater financial independence within the production ecosystem.",
    secondary:
      "By supporting stronger participation and professional growth, we want our business to contribute to more confident livelihoods and a more inclusive manufacturing environment.",
    image: "/images/Women Empoerment2.png",
    alt: "Women empowerment at OSD Apparels",
  },
  {
    id: "education",
    label: "Education Support",
    title: "Supporting Pakistani students with access, encouragement, and educational continuity.",
    text:
      "We also believe responsible growth means helping Pakistani students move forward in their studies through practical support, encouragement, and a culture that values learning beyond the factory floor.",
    secondary:
      "Our aim is to contribute to a future where more young people can continue their education with stronger confidence, better opportunity, and a clearer path toward personal development.",
    image: "/images/school.jpg",
    alt: "Education support for Pakistani students",
  },
];

export function CsrShowcase() {
  const [activeId, setActiveId] = useState(csrItems[0].id);
  const activeItem = csrItems.find((item) => item.id === activeId) ?? csrItems[0];

  return (
    <div className="csr-showcase">
      <Reveal className="csr-showcase__intro">
        <p className="section-eyebrow">Corporate Social Responsibility</p>
        <div className="section-accent" />
        <h2 className="section-title">We believe responsible growth should strengthen both communities and opportunity.</h2>
        <p className="section-text">
          Alongside apparel production, OSD Apparels stays committed to social impact by empowering women and helping
          Pakistani students continue moving forward with confidence.
        </p>
      </Reveal>

      <div className="csr-showcase__tabs" role="tablist" aria-label="CSR highlights">
        {csrItems.map((item, index) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={activeId === item.id}
            className={`csr-showcase__tab${activeId === item.id ? " csr-showcase__tab--active" : ""}`}
            onClick={() => setActiveId(item.id)}
          >
            <span className="csr-showcase__tab-number">0{index + 1}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </div>

      <Reveal className="csr-showcase__panel" key={activeItem.id}>
        <div className="csr-showcase__copy">
          <h3>{activeItem.title}</h3>
          <p>{activeItem.text}</p>
          <p>{activeItem.secondary}</p>
        </div>

        <div className="csr-showcase__media">
          <Image
            src={activeItem.image}
            alt={activeItem.alt}
            fill
            sizes="(max-width: 720px) 100vw, (max-width: 1080px) 48vw, 42vw"
            className="csr-showcase__image"
          />
        </div>
      </Reveal>
    </div>
  );
}
