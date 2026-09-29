"use client";

import { useEffect, useRef, useState } from "react";
import { profil } from "@/lib/contenu";

const SIGNATURE = 1720;
const RIDEAU = 1080;

const SELECTEUR = "body > a, header, main, footer, .bouton-remonter";

export function Ouverture() {
  const [present, setPresent] = useState(true);
  const [sortie, setSortie] = useState(false);
  const passer = useRef<() => void>(() => {});
  const racine = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    const reduit = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let timers: number[] = [];

    const relancer = () => {
      racine.current?.getAnimations({ subtree: true }).forEach((animation) => {
        animation.currentTime = 0;
        if (animation.playState !== "running") animation.play();
      });
    };

    const cibles = () => document.querySelectorAll<HTMLElement>(SELECTEUR);

    const liberer = () => {
      root.classList.remove("verrouille");
      cibles().forEach((noeud) => noeud.removeAttribute("inert"));
    };

    if (reduit) {
      root.classList.add("prete");
      setPresent(false);
      return;
    }

    relancer();
    const image = window.requestAnimationFrame(relancer);

    root.classList.add("verrouille");
    cibles().forEach((noeud) => noeud.setAttribute("inert", ""));

    const fermer = (delai: number, rendreFocus: boolean) => {
      timers.forEach((id) => window.clearTimeout(id));
      root.classList.add("prete");
      setSortie(true);
      timers = [
        window.setTimeout(() => {
          liberer();
          setPresent(false);
          if (rendreFocus) {
            document.getElementById("contenu")?.focus({ preventScroll: true });
          }
        }, delai),
      ];
    };

    passer.current = () => fermer(RIDEAU, true);

    const depart = window.setTimeout(() => {
      root.classList.add("prete");
      setSortie(true);
    }, SIGNATURE);

    const fin = window.setTimeout(() => {
      const actif = document.activeElement;
      liberer();
      setPresent(false);
      if (actif instanceof HTMLElement && actif.classList.contains("ouverture-passer")) {
        document.getElementById("contenu")?.focus({ preventScroll: true });
      }
    }, SIGNATURE + RIDEAU);

    timers = [depart, fin];

    const surEchap = (evenement: KeyboardEvent) => {
      if (evenement.key === "Escape") passer.current();
    };

    window.addEventListener("keydown", surEchap);
    return () => {
      window.cancelAnimationFrame(image);
      timers.forEach((id) => window.clearTimeout(id));
      window.removeEventListener("keydown", surEchap);
      liberer();
    };
  }, []);

  if (!present) return null;

  const [prenom, ...reste] = profil.nom.split(" ");
  const nom = reste.join(" ");

  return (
    <div ref={racine} className="ouverture-racine no-print" data-sortie={sortie ? "true" : "false"}>
      <div className="ouverture-haut" aria-hidden="true">
        <div className="ouverture-bloc ouverture-bloc-haut">
          <p className="ouverture-kicker">{profil.role}</p>
          <p className="ouverture-marc font-serif">{prenom}</p>
        </div>
      </div>
      <div className="ouverture-filet" aria-hidden="true" />
      <div className="ouverture-bas" aria-hidden="true">
        <div className="ouverture-bloc ouverture-bloc-bas">
          {nom ? <p className="ouverture-adou font-serif">{nom}</p> : null}
          <p className="ouverture-role">{profil.lieu}</p>
        </div>
      </div>
      <button type="button" className="ouverture-passer" onClick={() => passer.current()}>
        Passer
        <span className="sr-only"> l’introduction</span>
      </button>
    </div>
  );
}
