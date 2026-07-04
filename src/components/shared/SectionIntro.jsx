import { Reveal } from "@/components/shared/Reveal";

export function SectionIntro({ eyebrow, title, text, light = false, align = "center" }) {
  return (
    <Reveal className={`section-intro section-intro--${align}`}>
      <p className="section-eyebrow">{eyebrow}</p>
      <div className="section-accent" />
      <h2 className={light ? "section-title section-title--light" : "section-title"}>{title}</h2>
      {text ? (
        <p className={light ? "section-text section-text--light" : "section-text"}>{text}</p>
      ) : null}
    </Reveal>
  );
}
