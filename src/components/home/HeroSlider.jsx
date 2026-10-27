"use client";

import Image from "next/image";
import { getImageAlt } from "@/lib/image-alt";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useMemo, useRef, useState } from "react";

const heroStates = [
  {
    id: "state-1",
    topline: "We Export",
    display: "CUSTOM\nAPPAREL\nMANUFACTURING",
    image: "/images/hero1.png",
  },
  {
    id: "state-2",
    topline: "Pakistan's Finest",
    display: "KNITWEAR & WOVENS",
    image: "/images/hero 2.png",
  },
  {
    id: "state-3",
    topline: "Manufacturing Custom",
    display: "KNITTED & WOVEN GARMENTS",
    image: "/images/hero 3.png",
  },
];

const stripImages = [
  "/images/Kids.png",
  "/images/Hoodie.png",
  "/images/CottonLinen.png",
  "/images/Gurkha pants.png",
  "/images/Jackets.png",
  "/images/Uniforms.png",
  "/images/Outfits.png",
  "/images/Tees.png",
  
];

function Preloader({ onDone }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 1450;
    const startedAt = performance.now();
    let animationId = 0;

    const tick = (timestamp) => {
      const elapsed = timestamp - startedAt;
      const next = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(next);

      if (next < 100) {
        animationId = window.requestAnimationFrame(tick);
      } else {
        window.sessionStorage.setItem("osd-hero-preloaded", "1");
        window.setTimeout(onDone, 220);
      }
    };

    animationId = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(animationId);
  }, [onDone]);

  return (
    <motion.div
      className="hero-preloader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.4, ease: "easeOut" } }}
    >
      <div className="hero-preloader__inner">
        <strong>{progress}%</strong>
        <div className="hero-preloader__line">
          <motion.span
            className="hero-preloader__fill"
            animate={{ scaleX: progress / 100 }}
            transition={{ ease: "linear", duration: 0.08 }}
          />
        </div>
      </div>
    </motion.div>
  );
}

function AccentWord({ word }) {
  const trimmed = word.trim();
  if (trimmed.length < 2) {
    return <>{trimmed}</>;
  }

  return (
    <>
      {trimmed.slice(0, -1)}
      <span className="hero-cutout__display-accent">{trimmed.slice(-1)}</span>
    </>
  );
}

function HeroHeadline({ state, priority = false }) {
  const isLongDisplay = state.display.length > 18;

  return (
    <div className="hero-cutout__state">
      <div className="hero-cutout__headline-stack">
        <div className="hero-cutout__copy">
          <p className="hero-cutout__topline">{state.topline}</p>
          <h1 className={`hero-cutout__display hero-cutout__display--${state.id}${isLongDisplay ? " hero-cutout__display--long" : ""}`}>
            <AccentWord word={state.display} />
          </h1>
        </div>

        <div className="hero-cutout__visual" aria-hidden="true">
          <Image
            src={state.image}
            alt=""
            width={1220}
            height={1440}
            priority={priority}
            fetchPriority={priority ? "high" : undefined}
            sizes="(max-width: 960px) 42vw, 26vw"
            className="hero-cutout__visual-image hero-cutout__visual-image--focal"
          />
        </div>
      </div>
    </div>
  );
}

function MarqueeStrip({ reducedMotion, images }) {
  const marqueeImages = useMemo(() => [...images, ...images], [images]);

  return (
    <div className="hero-marquee">
      <div className={`hero-marquee__ticker${reducedMotion ? " hero-marquee__ticker--static" : ""}`}>
        <div className="hero-marquee__ticker-track">
          <span>GLOBAL COMPLIANCE / CUSTOM APPAREL / TRUSTED QUALITY / GLOBAL COMPLIANCE / CUSTOM APPAREL / TRUSTED QUALITY</span>
          <span>GLOBAL COMPLIANCE / CUSTOM APPAREL / TRUSTED QUALITY / GLOBAL COMPLIANCE / CUSTOM APPAREL / TRUSTED QUALITY</span>
        </div>
      </div>

      <div className={`hero-marquee__strip${reducedMotion ? " hero-marquee__strip--static" : ""}`}>
        <div className="hero-marquee__fade hero-marquee__fade--left" />
        <div className="hero-marquee__fade hero-marquee__fade--right" />

        <div className="hero-marquee__track">
          {marqueeImages.map((src, index) => (
            <div className="hero-marquee__card" key={`${src}-${index}`}>
              <Image
                src={src}
                alt={getImageAlt(src)}
                fill
                sizes="(max-width: 720px) 54vw, 21vw"
                className="hero-marquee__image"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function HeroSlider() {
  const shouldReduceMotion = useReducedMotion();
  const [showLoader, setShowLoader] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const rootRef = useRef(null);
  const pinRef = useRef(null);
  const prefersReducedMotion = shouldReduceMotion;
  const { scrollYProgress } = useScroll({
    target: rootRef,
    offset: ["start start", "end start"],
  });

  const selectHeroState = (progress) => {
    const nextIndex = Math.min(heroStates.length - 1, Math.floor(progress * heroStates.length));
    setActiveIndex((current) => (current === nextIndex ? current : nextIndex));
  };

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    // Mobile is not pinned, so it continues to use the section's native scroll progress.
    if (!isDesktop) selectHeroState(value);
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const frameId = window.requestAnimationFrame(() => {
      const hasLoaded = window.sessionStorage.getItem("osd-hero-preloaded");
      setShowLoader(!hasLoaded);
    });

    return () => window.cancelAnimationFrame(frameId);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const query = window.matchMedia("(min-width: 961px)");
    const update = () => setIsDesktop(query.matches);
    const frameId = window.requestAnimationFrame(update);

    query.addEventListener("change", update);
    return () => {
      window.cancelAnimationFrame(frameId);
      query.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || prefersReducedMotion || !isDesktop) return;
    if (!pinRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: pinRef.current,
        start: "top top",
        // Give all three hero states an equal, deliberate scroll interval.
        end: "+=260%",
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => selectHeroState(self.progress),
      });
    }, rootRef);

    return () => ctx.revert();
  }, [isDesktop, prefersReducedMotion]);

  return (
    <>
      <AnimatePresence>{showLoader ? <Preloader onDone={() => setShowLoader(false)} /> : null}</AnimatePresence>

      <section className="hero-slider hero-slider--cutout" ref={rootRef}>
        <div className="hero-header-sentinel" data-hero-header-sentinel aria-hidden="true" />

        <div className="hero-cutout__pin" ref={pinRef}>
          <div className="container hero-cutout__inner">
            <p className="hero-cutout__eyebrow">Apparel Manufacturing / Faisalabad, Pakistan</p>

            <div className="hero-cutout__stage">
              <div className="hero-cutout__states">
                <AnimatePresence initial={false} mode="wait">
                  <motion.div
                    key={heroStates[activeIndex].id}
                    className="hero-cutout__state-shell"
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -14 }}
                    transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <HeroHeadline state={heroStates[activeIndex]} priority={activeIndex === 0} />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="hero-cutout__bottom">
              <p className="hero-cutout__caption">
                Your Brand, Your Way. Custom apparel manufactured to your agreed product specifications.
              </p>

              <div className="hero-cutout__cta">
                <Link href="/quote" className="button button--gold">
                  Request a Quote
                </Link>
              </div>

              <p className="hero-cutout__support">
                Supporting international clothing brands with custom apparel manufacturing in Faisalabad, Pakistan.
              </p>
            </div>
          </div>
        </div>

        <div className="hero-cutout__marquee-wrap">
          <MarqueeStrip reducedMotion={prefersReducedMotion} images={stripImages} />
        </div>
      </section>
    </>
  );
}
