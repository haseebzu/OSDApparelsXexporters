"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ContentCard } from "@/components/shared/CardSystem";

export function HorizontalProductShowcase({ items }) {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const travel = Math.max(0, (items.length - 2) * 24);
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${travel}%`]);

  return (
    <section className="horizontal-products" ref={sectionRef}>
      <div className="horizontal-products__sticky">
        <motion.div className="horizontal-products__track" style={{ x }}>
          {items.map((item, index) => (
            <div className={`horizontal-product-card horizontal-product-card--${index + 1}`} key={item.title}>
              <ContentCard
                variant="product"
                image={item.src}
                alt={item.alt}
                title={item.title}
                meta={`${item.kicker} · MOQ 30+`}
                text={item.text}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
