"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { profil } from "@/lib/contenu";

const liens = [
  { href: "/", label: "Accueil", cle: "accueil" },
  { href: "/projets", label: "Projets", cle: "projets" },
  { href: "/parcours", label: "Parcours", cle: "parcours" },
  { href: profil.cv, label: "CV", cle: "cv", externe: true },
  { href: "/contact", label: "Contact", cle: "contact" },
] as const;

export function Entete() {
  const chemin = usePathname();
  const [ouvert, setOuvert] = useState(false);
  function actif(cle: (typeof liens)[number]["cle"]) {
    if (cle === "accueil") return chemin === "/";
    if (cle === "projets") return chemin.startsWith("/projets");
    if (cle === "parcours") return chemin === "/parcours";
    if (cle === "contact") return chemin === "/contact";
    return false;
  }

  function fermer() {
    setOuvert(false);
  }

  useEffect(() => {
    fermer();
  }, [chemin]);

  useEffect(() => {
    if (!ouvert) return;

    function surEchap(evenement: KeyboardEvent) {
      if (evenement.key === "Escape") setOuvert(false);
    }

    window.addEventListener("keydown", surEchap);
    return () => window.removeEventListener("keydown", surEchap);
  }, [ouvert]);

  const classeLien =
    "lien-nav text-[0.72rem] uppercase tracking-[0.16em] text-encre";

  return (
    <header className="sticky top-0 z-40 border-b border-ligne/80 bg-papier/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-6 sm:py-4">
        <Link href="/" onClick={fermer} className="flex min-w-0 flex-col leading-none sm:flex-row sm:items-baseline sm:gap-3">
          <span className="font-serif text-[1.02rem] font-medium leading-tight tracking-tight text-encre sm:text-[1.2rem]">
            {profil.nom}
          </span>
          <span className="mt-1 text-[0.62rem] uppercase tracking-[0.14em] text-douce sm:mt-0 sm:text-[0.68rem] sm:tracking-[0.16em]">
            {profil.role}
          </span>
        </Link>

        <nav aria-label="Navigation" className="hidden items-center gap-x-6 md:flex">
          {liens.map((lien) =>
            "externe" in lien ? (
              <a
                key={lien.cle}
                href={lien.href}
                target="_blank"
                rel="noreferrer"
                className={classeLien}
              >
                {lien.label}
              </a>
            ) : (
              <Link
                key={lien.cle}
                href={lien.href}
                aria-current={actif(lien.cle) ? "page" : undefined}
                className={classeLien}
              >
                {lien.label}
              </Link>
            ),
          )}
          <a
            href={profil.linkedin}
            target="_blank"
            rel="noreferrer"
            className="lien-nav text-[0.72rem] uppercase tracking-[0.16em] text-bronze"
          >
            LinkedIn
          </a>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center text-encre md:hidden"
          aria-expanded={ouvert}
          aria-controls="menu-mobile"
          onClick={() => setOuvert((valeur) => !valeur)}
        >
          <span className="sr-only">{ouvert ? "Fermer le menu" : "Ouvrir le menu"}</span>
          <span className="relative block h-3.5 w-5" aria-hidden="true">
            <span
              className={`absolute left-0 h-px w-5 bg-current transition duration-300 ${
                ouvert ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-px w-5 -translate-y-1/2 bg-current transition duration-300 ${
                ouvert ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 h-px w-5 bg-current transition duration-300 ${
                ouvert ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"
              }`}
            />
          </span>
        </button>
      </div>

      <div
        id="menu-mobile"
        className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none md:hidden ${
          ouvert ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden" inert={ouvert ? undefined : true}>
          <nav aria-label="Navigation mobile" className="border-t border-ligne px-5 pb-2">
            <ul>
              {liens.map((lien) => (
                <li key={lien.cle} className="border-b border-ligne">
                  {"externe" in lien ? (
                    <a
                      href={lien.href}
                      target="_blank"
                      rel="noreferrer"
                      onClick={fermer}
                      className="flex items-baseline justify-between py-3 font-serif text-lg font-medium tracking-tight text-encre"
                    >
                      {lien.label}
                    </a>
                  ) : (
                    <Link
                      href={lien.href}
                      aria-current={actif(lien.cle) ? "page" : undefined}
                      onClick={fermer}
                      className="flex items-baseline justify-between py-3 font-serif text-lg font-medium tracking-tight text-encre"
                    >
                      {lien.label}
                    </Link>
                  )}
                </li>
              ))}
              <li>
                <a
                  href={profil.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  onClick={fermer}
                  className="flex items-baseline justify-between py-3 font-serif text-lg font-medium tracking-tight text-bronze"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
