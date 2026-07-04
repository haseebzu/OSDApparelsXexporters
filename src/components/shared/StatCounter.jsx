"use client";

import { useEffect, useRef, useState } from "react";

function parseCounterValue(value) {
  const numeric = parseInt(value.replace(/[^\d]/g, ""), 10);
  return Number.isNaN(numeric) ? 0 : numeric;
}

function getCounterSuffix(value) {
  return value.replace(/[\d\s]/g, "");
}

export function StatCounter({ value, label, detail }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const target = parseCounterValue(value);
    let animationId = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        const duration = 900;
        const startedAt = performance.now();

        const step = (timestamp) => {
          const progress = Math.min((timestamp - startedAt) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.round(target * eased));

          if (progress < 1) {
            animationId = window.requestAnimationFrame(step);
          }
        };

        animationId = window.requestAnimationFrame(step);
        observer.disconnect();
      },
      { threshold: 0.3 }
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
    <div ref={ref} className="premium-stat">
      <strong>
        {count}
        {getCounterSuffix(value)}
      </strong>
      <span>{label}</span>
      {detail ? <small>{detail}</small> : null}
    </div>
  );
}
