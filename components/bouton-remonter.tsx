"use client";

import { useEffect, useState } from "react";
import { IconeFlecheHaut } from "@/components/icones";

const SEUIL = 480;

export function BoutonRemonter() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const mettreAJour = () => {
      setVisible(window.scrollY > SEUIL);
    };

    mettreAJour();
    window.addEventListener("scroll", mettreAJour, { passive: true });
    return () => window.removeEventListener("scroll", mettreAJour);
  }, []);

  function remonter() {
    const reduit = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduit ? "auto" : "smooth" });
  }

  return (
    <button
      type="button"
      onClick={remonter}
      aria-label="Remonter en haut"
      aria-hidden={visible ? undefined : true}
      tabIndex={visible ? 0 : -1}
      className={`no-print bouton-remonter fixed bottom-4 right-4 z-30 flex h-10 w-10 items-center justify-center bg-papier/90 text-encre ring-1 ring-inset ring-encre/25 backdrop-blur-md transition duration-300 hover:bg-encre hover:text-papier sm:bottom-6 sm:right-6 sm:h-11 sm:w-11 ${
        visible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-2 opacity-0"
      }`}
    >
      <IconeFlecheHaut className="h-4 w-4" />
    </button>
  );
}
