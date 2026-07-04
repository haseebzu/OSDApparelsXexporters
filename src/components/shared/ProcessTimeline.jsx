"use client";

import { useEffect, useRef } from "react";
import {
  Factory,
  FileText,
  PlaneTakeoff,
  ShieldCheck,
  SwatchBook,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const iconMap = {
  FileText,
  SwatchBook,
  Factory,
  ShieldCheck,
  PlaneTakeoff,
};

export function ProcessTimeline({ steps }) {
  const rootRef = useRef(null);
  const stepRefs = useRef([]);
  const progressRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !rootRef.current || !progressRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        progressRef.current,
        { scaleX: 0, transformOrigin: "left center" },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top 70%",
            end: "bottom 70%",
            scrub: true,
          },
        }
      );

      stepRefs.current.forEach((step, index) => {
        if (!step) return;

        ScrollTrigger.create({
          trigger: step,
          start: "top center",
          end: "bottom center",
          toggleClass: { targets: step, className: "timeline-step--active" },
        });

        gsap.fromTo(
          step,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            delay: index * 0.04,
            scrollTrigger: {
              trigger: step,
              start: "top 85%",
              once: true,
            },
          }
        );
      });
    }, rootRef);

    return () => ctx.revert();
  }, [steps]);

  return (
    <div className="process-timeline" ref={rootRef}>
      <div className="process-timeline__line">
        <span ref={progressRef} className="process-timeline__progress" />
      </div>
      <div className="process-timeline__grid">
        {steps.map((step, index) => {
          const Icon = iconMap[step.icon];

          return (
            <article
              className="timeline-step"
              key={step.title}
              ref={(element) => {
                stepRefs.current[index] = element;
              }}
            >
              <div className="timeline-step__icon">
                {Icon ? <Icon size={24} strokeWidth={1.8} /> : null}
              </div>
              <div className="timeline-step__content">
                <h3>
                  {step.number} {step.title}
                </h3>
                <p>{step.description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
