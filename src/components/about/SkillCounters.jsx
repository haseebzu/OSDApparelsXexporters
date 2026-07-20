"use client";

import { useEffect, useRef, useState } from "react";

function SkillCounter({ value }) {
  const [displayValue, setDisplayValue] = useState(0);
  const rootRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated.current) return;
        hasAnimated.current = true;

        const duration = 1100;
        const start = performance.now();

        const tick = (time) => {
          const progress = Math.min((time - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplayValue(Math.round(value * eased));

          if (progress < 1) {
            window.requestAnimationFrame(tick);
          }
        };

        window.requestAnimationFrame(tick);
      },
      { threshold: 0.45 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return <span ref={rootRef}>{displayValue}%</span>;
}

export function SkillCounters({ skills }) {
  return (
    <div className="about-skills__grid">
      {skills.map((skill) => (
        <div className="skill-ring" key={skill.label}>
          <div className="skill-ring__circle">
            <SkillCounter value={skill.value} />
          </div>
          <strong>{skill.label}</strong>
          <small>{skill.text}</small>
        </div>
      ))}
    </div>
  );
}
