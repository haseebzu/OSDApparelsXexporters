"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function StatValue({ value }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const target = parseInt(String(value).replace(/[^\d]/g, ""), 10) || 0;
    let animationId = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        const startedAt = performance.now();
        const duration = 900;

        const tick = (timestamp) => {
          const progress = Math.min((timestamp - startedAt) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.round(target * eased));

          if (progress < 1) {
            animationId = window.requestAnimationFrame(tick);
          }
        };

        animationId = window.requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.35 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      window.cancelAnimationFrame(animationId);
      observer.disconnect();
    };
  }, [value]);

  return (
    <strong ref={ref}>
      {count}
      {String(value).replace(/[\d\s]/g, "")}
    </strong>
  );
}

export function ContentCard({ variant, ...props }) {
  if (variant === "service") {
    const { label, title, text, image } = props;

    return (
      <article className="content-card content-card--service">
        {image ? (
          <div className="content-card__service-media">
            <Image src={image} alt={title} fill sizes="(max-width: 720px) 88vw, (max-width: 1080px) 44vw, 25vw" className="content-card__service-image" />
            <div className="content-card__service-overlay" />
          </div>
        ) : null}
        <div className="content-card__service-copy">
          <span className="content-card__service-label">{label}</span>
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      </article>
    );
  }

  if (variant === "product") {
    const { image, alt, title, meta, text } = props;

    return (
      <article className="content-card content-card--product">
        <div className="content-card__product-media">
          <Image src={image} alt={alt} fill sizes="(max-width: 720px) 88vw, 34vw" className="content-card__product-image" />
          <div className="content-card__product-overlay">
            <span>{meta}</span>
          </div>
        </div>
        <div className="content-card__product-copy">
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      </article>
    );
  }

  if (variant === "testimonial") {
    const { quote, name, role, country } = props;

    return (
      <article className="content-card content-card--testimonial">
        <div className="content-card__quote-mark">“</div>
        <p>{quote}</p>
        <div className="content-card__testimonial-meta">
          <strong>{name}</strong>
          <span>
            {role} · {country}
          </span>
        </div>
      </article>
    );
  }

  if (variant === "stat") {
    const { value, label } = props;

    return (
      <article className="content-card content-card--stat">
        <StatValue value={value} />
        <span>{label}</span>
      </article>
    );
  }

  return null;
}
