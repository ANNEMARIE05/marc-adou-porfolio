"use client";

import { useEffect, useRef } from "react";

type Proprietes = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export function Reveler({ children, className = "", delay = 0 }: Proprietes) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const montrer = () => {
      element.dataset.visible = "true";
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      montrer();
      return;
    }

    const observateur = new IntersectionObserver(
      ([entree]) => {
        if (!entree?.isIntersecting) return;
        montrer();
        observateur.disconnect();
      },
      { threshold: 0.12, rootMargin: "0px 0px -4% 0px" },
    );

    observateur.observe(element);
    return () => observateur.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveler ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
