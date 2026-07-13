"use client";

import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useMemo, useRef, useState } from "react";

const heroStates = [
  {
    id: "state-1",
    topline: "We Export",
    display: "EXCELLENCE",
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
    topline: "Sourcing Custom",
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
        <p className="hero-cutout__topline">{state.topline}</p>
        <span className="hero-cutout__topline-focal" aria-hidden="true">
          <Image
            src={state.image}
            alt="OSD Apparels focal product hero"
            width={1220}
            height={1440}
            priority={priority}
            fetchPriority={priority ? "high" : undefined}
            sizes="(max-width: 960px) 42vw, 26vw"
            className="hero-cutout__visual-image hero-cutout__visual-image--focal"
          />
        </span>

        <h1 className={`hero-cutout__display${isLongDisplay ? " hero-cutout__display--long" : ""}`}>
          <AccentWord word={state.display} />
        </h1>
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
          <span>GLOBAL COMPLIANCE / FASTER SOURCING / TRUSTED QUALITY / GLOBAL COMPLIANCE / FASTER SOURCING / TRUSTED QUALITY</span>
          <span>GLOBAL COMPLIANCE / FASTER SOURCING / TRUSTED QUALITY / GLOBAL COMPLIANCE / FASTER SOURCING / TRUSTED QUALITY</span>
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
                alt="OSD Apparels product preview"
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
  const [hasMounted, setHasMounted] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [mobilePhase, setMobilePhase] = useState(0);
  const rootRef = useRef(null);
  const pinRef = useRef(null);
  const stateRefs = useRef([]);
  const prefersReducedMotion = hasMounted ? shouldReduceMotion : false;
  const { scrollYProgress } = useScroll({
    target: rootRef,
    offset: ["start start", "end start"],
  });

  const mobileStateStyles = [
    {
      opacity: useTransform(scrollYProgress, [0, 0.12, 0.26, 0.34], [1, 1, 0.18, 0]),
      y: useTransform(scrollYProgress, [0, 0.34], [0, -24]),
    },
    {
      opacity: useTransform(scrollYProgress, [0.2, 0.34, 0.52, 0.68], [0, 0.94, 0.94, 0]),
      y: useTransform(scrollYProgress, [0.2, 0.34, 0.68], [24, 0, -24]),
    },
    {
      opacity: useTransform(scrollYProgress, [0.54, 0.72, 1], [0, 1, 1]),
      y: useTransform(scrollYProgress, [0.54, 0.72], [24, 0]),
    },
  ];

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    if (value < 0.34) {
      setMobilePhase(0);
    } else if (value < 0.72) {
      setMobilePhase(1);
    } else {
      setMobilePhase(2);
    }
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    setHasMounted(true);

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
    if (!pinRef.current || stateRefs.current.length < heroStates.length) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      stateRefs.current.forEach((element, index) => {
        if (!element) return;
        gsap.set(element, {
          opacity: index === 0 ? 1 : 0,
          y: index === 0 ? 0 : 24,
          visibility: index === 0 ? "visible" : "hidden",
        });
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: pinRef.current,
          start: "top top",
          end: "+=190%",
          pin: true,
          scrub: true,
          invalidateOnRefresh: true,
          onUpdate: ({ progress }) => {
            stateRefs.current.forEach((element, index) => {
              if (!element) return;

              if (progress < 0.42) {
                element.style.visibility = index === 2 ? "hidden" : "visible";
                return;
              }

              if (progress < 0.84) {
                element.style.visibility = index === 0 ? "hidden" : "visible";
                return;
              }

              element.style.visibility = index === 2 ? "visible" : "hidden";
            });
          },
        },
      });

      timeline.to(stateRefs.current[0], { opacity: 0, y: -24, ease: "none" }, 0);
      timeline.to(stateRefs.current[1], { opacity: 1, y: 0, ease: "none" }, 0);
      timeline.to(stateRefs.current[1], { opacity: 0, y: -24, ease: "none" }, 0.42);
      timeline.to(stateRefs.current[2], { opacity: 1, y: 0, ease: "none" }, 0.42);
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
            <p className="hero-cutout__eyebrow">Apparel Sourcing & Export / Faisalabad, Pakistan</p>

            <div className="hero-cutout__stage">
              <div className="hero-cutout__states">
                {heroStates.map((state, index) => {
                  const mobileStyle = !isDesktop && !prefersReducedMotion ? mobileStateStyles[index] : undefined;
                  const mobileHidden =
                    !isDesktop &&
                    !prefersReducedMotion &&
                    ((mobilePhase === 0 && index === 2) ||
                      (mobilePhase === 1 && index === 0) ||
                      (mobilePhase === 2 && index !== 2));

                  return (
                    <motion.div
                      key={state.id}
                      className={`hero-cutout__state-shell${index > 0 ? " hero-cutout__state-shell--overlay" : ""}`}
                      ref={(element) => {
                        stateRefs.current[index] = element;
                      }}
                      style={mobileStyle}
                      data-state-hidden={mobileHidden ? "true" : "false"}
                    >
                      <HeroHeadline state={state} priority={index === 0} />
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="hero-cutout__bottom">
              <p className="hero-cutout__caption">
                Specialized in private-label sourcing, export coordination, and apparel vendor alignment for serious
                buying programs.
              </p>

              <div className="hero-cutout__cta">
                <Link href="/quote" className="button button--gold">
                  Request a Quote
                </Link>
              </div>

              <p className="hero-cutout__support">
                Partnering with fashion brands across USA, UK, EU, and UAE through Faisalabad&apos;s strongest factory
                and supplier networks.
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
