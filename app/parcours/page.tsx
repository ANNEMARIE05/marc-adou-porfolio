import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Bouton } from "@/components/bouton";
import { IconeDocument, IconeFleche } from "@/components/icones";
import { Reveler } from "@/components/reveler";
import { profil, projetsDe } from "@/lib/contenu";

export const metadata: Metadata = {
  title: "Parcours",
  description:
    `Parcours de ${profil.nom}, product designer. NGSER, VEONE, AFINOV, formation et langues.`,
};

export default function Page() {
  return (
    <article className="mx-auto max-w-5xl px-5 py-8 sm:px-6 sm:py-16">
      <header className="grid grid-cols-[6.25rem_minmax(0,1fr)] items-center gap-x-4 gap-y-6 sm:grid-cols-[7.5rem_minmax(0,1fr)] sm:items-start sm:gap-x-10 lg:grid-cols-[16rem_1fr] lg:gap-x-14">
        <div className="entrer-photo portrait-fixe cadre relative aspect-[3/4] w-full self-start overflow-hidden bg-sable sm:row-span-2">
          <Image
            src={profil.portrait}
            alt={profil.altPortrait}
            fill
            priority
            sizes="(min-width: 1024px) 16rem, 8rem"
            className="object-cover object-center"
          />
        </div>
        <div className="min-w-0 self-center sm:self-start">
          <p className="entrer text-[0.65rem] uppercase tracking-[0.16em] text-bronze sm:text-[0.72rem] sm:tracking-[0.22em]">
            Parcours
          </p>
          <h1
            className="entrer mt-1.5 font-serif text-[1.55rem] font-medium leading-[0.95] tracking-tight sm:mt-3 sm:text-5xl lg:text-6xl"
            style={{ animationDelay: "80ms" }}
          >
            {profil.nom}
          </h1>
          <p
            className="entrer mt-2 text-[0.65rem] uppercase leading-4 tracking-[0.12em] text-douce sm:mt-4 sm:text-sm sm:tracking-[0.16em]"
            style={{ animationDelay: "140ms" }}
          >
            {profil.role}
          </p>
        </div>
        <div className="col-span-2 min-w-0 sm:col-span-1 sm:mt-6">
          <p
            className="entrer max-w-xl text-[0.95rem] leading-7 text-douce sm:text-lg sm:leading-8"
            style={{ animationDelay: "200ms" }}
          >
            {profil.introParcours}
          </p>
          <ul className="entrer mt-5 flex flex-col gap-2 text-sm" style={{ animationDelay: "260ms" }}>
            <li>
              <a href={`mailto:${profil.email}`} className="lien-nav break-words">
                {profil.email}
              </a>
            </li>
            <li>
              <a href={profil.telephoneLien} className="lien-nav">
                {profil.telephone}
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
            <Bouton href={profil.cv} variante="ligne" nouvelOnglet>
              <IconeDocument />
              Voir le CV
            </Bouton>
          </div>
        </div>
      </header>

      <section className="mt-12">
        <Reveler>
          <h2 className="font-serif text-2xl font-medium tracking-tight sm:text-3xl">Expérience</h2>
        </Reveler>
        <ul className="mt-4">
          {profil.experiences.map((experience, index) => (
            <li key={experience.structure}>
              <Reveler delay={index * 70} className="fiche grid gap-2 py-6 sm:grid-cols-[11rem_1fr] sm:gap-8">
                <p className="text-sm text-bronze">{experience.periode}</p>
                <div>
                  <h3 className="font-serif text-xl font-medium leading-tight tracking-tight sm:text-2xl">
                    {experience.titre}
                  </h3>
                  <p className="mt-1 text-sm text-encre">
                    {experience.structure}
                  </p>
                  <p className="mt-1 text-sm text-douce">{experience.domaines}</p>
                  <p className="mt-3 leading-7 text-douce">{experience.texte}</p>
                  <ul className="mt-4 border-t border-ligne">
                    {projetsDe(experience.structure).map((projet) => (
                      <li key={projet.slug}>
                        <Link href={`/projets/${projet.slug}`} className="group block py-3">
                          <span className="flex items-center justify-between gap-4">
                            <span className="font-medium transition-colors group-hover:text-bronze">
                              {projet.nom}
                            </span>
                            <IconeFleche className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                          </span>
                          <span className="mt-1 block text-sm leading-6 text-douce">{projet.ligne}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveler>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <Reveler>
          <h2 className="font-serif text-2xl font-medium tracking-tight sm:text-3xl">Formation</h2>
        </Reveler>
        <ul className="mt-4">
          {profil.formation.map((etude, index) => (
            <li key={etude.titre}>
              <Reveler delay={index * 70} className="fiche grid gap-2 py-6 sm:grid-cols-[11rem_1fr] sm:gap-8">
                <p className="text-sm text-bronze">{etude.periode}</p>
                <div>
                  <h3 className="font-serif text-xl font-medium leading-tight tracking-tight sm:text-2xl">
                    {etude.titre}
                  </h3>
                  <p className="mt-1 text-sm text-encre">{etude.etablissement}</p>
                </div>
              </Reveler>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12 grid gap-10 border-t border-ligne pt-8 sm:grid-cols-2">
        <Reveler>
          <h2 className="font-serif text-2xl font-medium tracking-tight sm:text-3xl">Compétences</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {profil.competences.map((competence) => (
              <li key={competence} className="border border-ligne px-3 py-2 text-sm text-douce">
                {competence}
              </li>
            ))}
          </ul>
        </Reveler>
        <Reveler delay={80}>
          <h2 className="font-serif text-2xl font-medium tracking-tight sm:text-3xl">Outils</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {profil.outils.map((outil) => (
              <li key={outil} className="border border-ligne px-3 py-2 text-sm text-douce">
                {outil}
              </li>
            ))}
          </ul>
        </Reveler>
      </section>

      <section className="mt-12 border-t border-ligne pt-8">
        <Reveler>
          <h2 className="font-serif text-2xl font-medium tracking-tight sm:text-3xl">Langues</h2>
          <ul className="mt-4 max-w-md">
            {profil.langues.map((langue) => (
              <li
                key={langue.nom}
                className="flex justify-between gap-4 border-t border-ligne py-3 text-sm first:border-t-0"
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
