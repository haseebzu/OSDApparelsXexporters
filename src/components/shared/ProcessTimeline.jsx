"use client";

import Image from "next/image";
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

const processImageMap = {
  Inquiry: "/images/Inquriy.png",
  Sampling: "/images/Sampling.png",
  Production: "/images/productionTimline.jpg",
  "Final QC": "/images/Qc.jpg",
  Delivery: "/images/Delivery.jpg",
};

export function ProcessTimeline({ steps, variant = "default" }) {
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

  if (variant === "map") {
    return (
      <div className="process-map" ref={rootRef}>
        <svg className="process-map__paths" viewBox="0 0 1000 440" preserveAspectRatio="none" aria-hidden="true">
          <path d="M120 112C210 82 244 92 332 170C420 248 510 244 600 186C692 126 766 114 878 122" />
          <path d="M122 314C232 284 298 278 406 324C520 374 650 370 770 302C824 272 852 256 878 238" />
        </svg>

        <div className="process-map__grid">
          {steps.map((step, index) => {
            const nodeClass = index < 3 ? "process-map__node process-map__node--top" : "process-map__node process-map__node--bottom";
            const stepImage = processImageMap[step.title] ?? "/images/factory-overview.png";

            return (
              <article
                className={nodeClass}
                key={step.title}
                ref={(element) => {
                  stepRefs.current[index] = element;
                }}
              >
                <h3 className="process-map__title">{step.title.toUpperCase()}</h3>
                <div className="process-map__circle">
                  <div className="process-map__photo">
                    <Image
                      src={stepImage}
                      alt={`${step.title} stage of the OSD Apparels garment manufacturing process`}
                      fill
                      sizes="160px"
                      className="process-map__photo-image"
                    />
                  </div>
                </div>
                <p className="process-map__text">{step.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    );
  }

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
