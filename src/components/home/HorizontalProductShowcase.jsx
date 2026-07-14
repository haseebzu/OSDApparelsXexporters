"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

export function HorizontalProductShowcase({ items }) {
  const sectionRef = useRef(null);
  const stickyRef = useRef(null);
  const trackRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const steps = useMemo(() => Math.max(1, items.length), [items.length]);
  const [activeStep, setActiveStep] = useState(0);
  const [travel, setTravel] = useState(0);
  const x = useTransform(scrollYProgress, [0, 1], [0, -travel]);

  useEffect(() => {
    function measureTravel() {
      if (!stickyRef.current || !trackRef.current) {
        setTravel(0);
        return;
      }

      const nextTravel = Math.max(0, trackRef.current.scrollWidth - stickyRef.current.clientWidth);
      setTravel(nextTravel);
    }

    measureTravel();
    window.addEventListener("resize", measureTravel);

    return () => window.removeEventListener("resize", measureTravel);
  }, [items]);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const nextStep = Math.min(steps - 1, Math.max(0, Math.round(value * (steps - 1))));
    setActiveStep(nextStep);
  });

  function scrollToStep(step) {
    if (typeof window === "undefined" || !sectionRef.current || steps <= 1) {
      return;
    }

    const boundedStep = Math.min(steps - 1, Math.max(0, step));
    const sectionRect = sectionRef.current.getBoundingClientRect();
    const sectionTop = window.scrollY + sectionRect.top;
    const sectionScrollableDistance = sectionRef.current.offsetHeight - window.innerHeight;
    const targetY = sectionTop + sectionScrollableDistance * (boundedStep / (steps - 1));

    window.scrollTo({
      top: targetY,
      behavior: "smooth",
    });
  }

  return (
    <section className="horizontal-products" ref={sectionRef}>
      <div className="horizontal-products__sticky" ref={stickyRef}>
        <div className="horizontal-products__nav" aria-label="Product highlight navigation">
          <div className="horizontal-products__dots" aria-label="Product highlight positions">
            {Array.from({ length: steps }).map((_, index) => (
              <button
                key={`dot-${index}`}
                type="button"
                className={`horizontal-products__dot${index === activeStep ? " is-active" : ""}`}
                aria-label={`Go to product position ${index + 1}`}
                aria-pressed={index === activeStep}
                onClick={() => scrollToStep(index)}
              />
            ))}
          </div>

          <div className="horizontal-products__arrows">
            <button
              type="button"
              className="horizontal-products__arrow-button"
              aria-label="Previous products"
              onClick={() => scrollToStep(activeStep - 1)}
              disabled={activeStep === 0}
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              className="horizontal-products__arrow-button"
              aria-label="Next products"
              onClick={() => scrollToStep(activeStep + 1)}
              disabled={activeStep === steps - 1}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <motion.div className="horizontal-products__track" ref={trackRef} style={{ x }}>
          {items.map((item, index) => (
            <Link
              className={`horizontal-product-card horizontal-product-card--${index + 1}`}
              href={item.href || "/products"}
              key={item.title}
              aria-label={item.title ? `${item.title} product category` : `Product category ${index + 1}`}
            >
              <div className="horizontal-product-card__media">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 720px) 86vw, (max-width: 1080px) 44vw, 31vw"
                  className="horizontal-product-card__image"
                />
                <div className="horizontal-product-card__overlay" />
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
