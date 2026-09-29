import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Bouton } from "@/components/bouton";
import { CarteProjet } from "@/components/carte-projet";
import { IconeFleche, IconeFlecheGauche } from "@/components/icones";
import { Reveler } from "@/components/reveler";
import { experienceParStructure, projetParSlug, projetSuivant, projets } from "@/lib/contenu";

type Proprietes = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projets.map((projet) => ({ slug: projet.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Proprietes): Promise<Metadata> {
  const { slug } = await params;
  const projet = projetParSlug(slug);
  if (!projet) return { title: "Projet" };

  return {
    title: projet.nom,
    description: `${projet.ligne} ${projet.structure}, ${projet.periode}.`,
  };
}

export default async function Page({ params }: Proprietes) {
  const { slug } = await params;
  const projet = projetParSlug(slug);
  if (!projet) notFound();

  const experience = experienceParStructure(projet.structure);
  const suivant = projetSuivant(projet.slug);
  const index = projets.findIndex((item) => item.slug === projet.slug);
  const faits = [
    ["Structure", projet.structure],
    ["Poste", experience?.titre ?? ""],
    ["Période", experience?.periode ?? projet.periode],
    ["Domaine", projet.secteur],
    ["Support", projet.support ?? ""],
  ].filter(([, valeur]) => valeur);

  return (
    <article className="pb-16 sm:pb-24">
      <div className="mx-auto max-w-6xl px-5 pt-6 sm:px-6 sm:pt-8">
        <Link
          href="/projets"
          className="lien-nav inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.16em] text-douce hover:text-encre"
        >
          <IconeFlecheGauche />
          Projets
        </Link>
      </div>

      <header className="mx-auto mt-6 max-w-6xl px-5 sm:mt-8 sm:px-6">
        <div className="entrer-photo cadre relative aspect-[4/3] overflow-hidden bg-sable sm:aspect-[16/9]">
          <Image
            src={projet.image}
            alt={projet.alt}
            fill
            priority
            sizes="(min-width: 1152px) 72rem, 100vw"
            className="object-cover"
          />
        </div>
        <p
          className="entrer mt-6 font-serif text-lg text-bronze sm:mt-8 sm:text-xl"
          style={{ animationDelay: "80ms" }}
        >
          {String(index + 1).padStart(2, "0")}
          <span className="mx-3 inline-block h-px w-8 translate-y-[-0.3em] bg-bronze/50 align-middle" />
          <span className="font-sans text-[0.72rem] uppercase tracking-[0.16em]">
            {projet.structure}
            <span aria-hidden="true"> · </span>
            {projet.secteur}
          </span>
        </p>
        <h1
          className="entrer mt-3 max-w-4xl font-serif text-[2rem] font-medium leading-[1.05] tracking-tight sm:mt-4 sm:text-6xl"
          style={{ animationDelay: "150ms" }}
        >
          {projet.nom}
        </h1>
        <p
          className="entrer mt-4 max-w-2xl text-[0.95rem] leading-7 text-douce sm:text-lg sm:leading-8"
          style={{ animationDelay: "220ms" }}
        >
          {projet.ligne}
        </p>
      </header>

      <div className="mx-auto mt-10 grid max-w-6xl gap-10 px-5 sm:mt-14 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <dl>
          {faits.map(([libelle, valeur]) => (
            <div
              key={libelle}
              className="flex flex-col gap-1 border-t border-ligne py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
            >
              <dt className="text-[0.65rem] uppercase tracking-[0.14em] text-douce sm:text-[0.68rem] sm:tracking-[0.16em]">
                {libelle}
              </dt>
              <dd className="text-[0.95rem] leading-6 sm:text-right">{valeur}</dd>
            </div>
          ))}
        </dl>
        {experience ? (
          <Reveler>
            <h2 className="font-serif text-2xl font-medium tracking-tight sm:text-3xl">
              Chez {experience.structure}
            </h2>
            <p className="mt-3 text-sm text-bronze">{experience.domaines}</p>
            <p className="mt-3 text-[0.95rem] leading-7 text-douce sm:text-lg sm:leading-8">
              {experience.texte}
            </p>
            <div className="mt-8">
              <Bouton href="/contact">
                Écrire
                <IconeFleche />
              </Bouton>
            </div>
          </Reveler>
        ) : null}
      </div>

      {suivant ? (
        <div className="mx-auto mt-16 max-w-6xl border-t border-ligne px-5 pt-12 sm:px-6">
          <Reveler>
            <p className="text-[0.72rem] uppercase tracking-[0.18em] text-douce">Projet suivant</p>
            <div className="mt-6 lg:max-w-3xl">
              <CarteProjet
                projet={suivant}
                index={projets.findIndex((item) => item.slug === suivant.slug)}
              />
            </div>
          </Reveler>
        </div>
      ) : null}
    </article>
  );
}
