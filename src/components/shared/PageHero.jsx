import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";

export function PageHero({ eyebrow, title, text, primaryCta, secondaryCta, highlights = [] }) {
  return (
    <section className="page-hero">
      <div className="page-hero__backdrop" />
      <div className="page-hero__ambient page-hero__ambient--one" />
      <div className="page-hero__ambient page-hero__ambient--two" />
      <div className="container page-hero__content">
        <Reveal className="page-hero__panel">
          <div className="page-hero__copy">
            <p className="section-eyebrow">{eyebrow}</p>
            <h1 className="page-hero__title">{title}</h1>
            <p className="page-hero__text">{text}</p>
            {highlights.length ? (
              <div className="page-hero__highlights">
                {highlights.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            ) : null}
            <div className="button-row">
              {primaryCta ? (
                <Link className="button button--gold" href={primaryCta.href}>
                  {primaryCta.label}
                </Link>
              ) : null}
              {secondaryCta ? (
                <Link className="button button--ghost" href={secondaryCta.href}>
                  {secondaryCta.label}
                </Link>
              ) : null}
            </div>
          </div>
          <div className="page-hero__aside">
            <div className="page-hero__aside-card">
              <strong>Private Label Ready</strong>
              <span>Custom development, export planning, and premium production coordination.</span>
            </div>
            <div className="page-hero__aside-grid">
              <div>
                <strong>30 pcs</strong>
                <span>MOQ</span>
              </div>
              <div>
                <strong>24 hrs</strong>
                <span>Quote Turnaround</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
