"use client";

import { useEffect, useRef } from "react";

export function FiletLecture() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const trait = ref.current;
    if (!trait) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      trait.hidden = true;
      return;
    }

    let frame = 0;
    const mesurer = () => {
      const hauteur = document.documentElement.scrollHeight - window.innerHeight;
      const progression = hauteur > 0 ? Math.min(1, Math.max(0, window.scrollY / hauteur)) : 0;
      trait.style.transform = `scaleX(${progression})`;
    };

    const demander = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(mesurer);
    };

    mesurer();
    window.addEventListener("scroll", demander, { passive: true });
    window.addEventListener("resize", demander);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", demander);
      window.removeEventListener("resize", demander);
    };
  }, []);

  return <div ref={ref} className="filet-lecture no-print" aria-hidden="true" />;
}
