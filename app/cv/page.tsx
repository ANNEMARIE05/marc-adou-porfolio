import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { IconeFleche } from "@/components/icones";
import { Reveler } from "@/components/reveler";
import { profil, projets } from "@/lib/contenu";
import { Imprimer } from "./imprimer";

export const metadata: Metadata = {
  title: "CV",
  description: "Parcours de Marc Adou, marketing digital. Expériences, formation et missions.",
};

export default function Page() {
  return (
    <article className="mx-auto max-w-5xl px-5 py-8 sm:px-6 sm:py-16">
      <header className="grid grid-cols-[6.25rem_minmax(0,1fr)] items-center gap-x-4 gap-y-6 sm:grid-cols-[7.5rem_minmax(0,1fr)] sm:items-start sm:gap-x-10 lg:grid-cols-[16rem_1fr] lg:gap-x-14">
        <div className="entrer-photo cadre relative aspect-[3/4] w-full self-start overflow-hidden bg-sable sm:row-span-2">
          <Image
            src={profil.portrait}
            alt={profil.altPortrait}
            fill
            priority
            sizes="(min-width: 1024px) 16rem, 8rem"
            className="object-cover object-[center_18%]"
          />
        </div>
        <div className="min-w-0 self-center sm:self-start">
          <p className="entrer text-[0.65rem] uppercase tracking-[0.16em] text-bronze sm:text-[0.72rem] sm:tracking-[0.22em]">
            Parcours
          </p>
          <h1
            className="entrer mt-1.5 font-serif text-[1.85rem] font-medium leading-[0.95] tracking-tight sm:mt-3 sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "80ms" }}
          >
            {profil.nom}
          </h1>
          <p
            className="entrer mt-2 text-[0.65rem] uppercase leading-4 tracking-[0.12em] text-douce sm:mt-4 sm:text-sm sm:tracking-[0.16em]"
            style={{ animationDelay: "140ms" }}
          >
            <span className="block sm:inline">{profil.role}</span>
            <span className="hidden sm:inline" aria-hidden="true">
              {" "}
              ·{" "}
            </span>
            <span className="block sm:inline">{profil.lieu}</span>
          </p>
        </div>
        <div className="col-span-2 min-w-0 sm:col-span-1 sm:mt-6">
          <p
            className="entrer max-w-xl text-[0.95rem] leading-7 text-douce sm:text-lg sm:leading-8"
            style={{ animationDelay: "200ms" }}
          >
            {profil.introCv}
          </p>
          <ul className="entrer mt-5 flex flex-col gap-2 text-sm" style={{ animationDelay: "260ms" }}>
            <li>
              <a href={`mailto:${profil.email}`} className="lien-nav break-words">
                {profil.email}
              </a>
            </li>
            <li>
              <a
                href={profil.linkedin}
                target="_blank"
                rel="noreferrer"
                className="lien-nav inline-flex items-center gap-2"
              >
                LinkedIn
                <IconeFleche className="h-3.5 w-3.5" />
              </a>
            </li>
          </ul>
          <dl
            className="entrer mt-6 grid grid-cols-3 gap-3 border-t border-ligne pt-5 sm:mt-8 sm:gap-4 sm:pt-6"
            style={{ animationDelay: "320ms" }}
          >
            {profil.chiffres.map((chiffre) => (
              <div key={chiffre.detail} className="min-w-0">
                <dt className="chiffre whitespace-nowrap font-serif text-[1.65rem] font-medium leading-none tracking-tight sm:text-3xl">
                  {chiffre.valeur}
                </dt>
                <dd className="mt-2 text-[0.68rem] leading-snug text-balance text-douce sm:text-xs sm:leading-5">
                  {chiffre.detail}
                </dd>
              </div>
            ))}
          </dl>
          <div className="entrer mt-6 sm:mt-8" style={{ animationDelay: "400ms" }}>
            <Imprimer />
          </div>
        </div>
      </header>

      <section className="mt-12 sm:mt-16">
        <Reveler>
          <h2 className="font-serif text-2xl font-medium tracking-tight sm:text-3xl">Expérience</h2>
        </Reveler>
        <ul className="mt-4">
          {profil.experiences.map((experience, index) => (
            <li key={experience.periode}>
              <Reveler
                delay={index * 70}
                className="fiche grid gap-2 py-6 sm:grid-cols-[11rem_1fr] sm:gap-8"
              >
                <p className="text-sm text-bronze">{experience.periode}</p>
                <div>
                  <h3 className="font-serif text-xl font-medium leading-tight tracking-tight sm:text-2xl">
                    {experience.titre}
                  </h3>
                  <p className="mt-1 text-sm text-encre">
                    {experience.structure
                      ? `${experience.structure} · ${experience.lieu}`
                      : experience.lieu}
                  </p>
                  <p className="mt-3 leading-7 text-douce">{experience.texte}</p>
                </div>
              </Reveler>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <Reveler>
          <h2 className="font-serif text-2xl font-medium tracking-tight sm:text-3xl">Missions récentes</h2>
        </Reveler>
        <ul className="mt-4 grid gap-px bg-ligne sm:grid-cols-2">
          {projets.map((projet) => (
            <li key={projet.slug} className="bg-papier">
              <Reveler>
                <Link href={`/projets/${projet.slug}`} className="group block px-1 py-5 sm:px-5">
                <span className="text-[0.68rem] uppercase tracking-[0.16em] text-bronze">
                  {projet.annee}
                  <span aria-hidden="true"> · </span>
                  {projet.secteur}
                </span>
                <span className="mt-2 flex items-center justify-between gap-4">
                  <span className="font-serif text-xl font-medium leading-tight tracking-tight transition-colors group-hover:text-bronze sm:text-2xl">
                    {projet.nom}
                  </span>
                  <IconeFleche className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <span className="mt-2 block text-sm leading-6 text-douce">
                  {projet.ligne}. {projet.role}.
                </span>
                </Link>
              </Reveler>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12 grid gap-10 border-t border-ligne pt-8 sm:grid-cols-2">
        <Reveler>
          <h2 className="font-serif text-2xl font-medium tracking-tight sm:text-3xl">Formation</h2>
          <p className="mt-4 text-sm text-bronze">{profil.formation.annee}</p>
          <p className="mt-1">{profil.formation.titre}</p>
        </Reveler>
        <Reveler delay={80}>
          <h2 className="font-serif text-2xl font-medium tracking-tight sm:text-3xl">Langues</h2>
          <ul className="mt-4 space-y-2">
            {profil.langues.map((langue) => (
              <li
                key={langue.nom}
                className="flex justify-between gap-4 border-t border-ligne py-3 text-sm"
              >
                <span>{langue.nom}</span>
                <span className="text-douce">{langue.niveau}</span>
              </li>
            ))}
          </ul>
        </Reveler>
      </section>
    </article>
  );
}
