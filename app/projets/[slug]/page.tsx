import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Bouton } from "@/components/bouton";
import { CarteProjet } from "@/components/carte-projet";
import { IconeFleche, IconeFlecheGauche } from "@/components/icones";
import { Reveler } from "@/components/reveler";
import { projetParSlug, projetSuivant, projets } from "@/lib/contenu";

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
    description: `${projet.ligne}. ${projet.client}, ${projet.annee}. ${projet.role}.`,
  };
}

const faits = [
  ["Client", "client"],
  ["Secteur", "secteur"],
  ["Année", "annee"],
  ["Durée", "duree"],
  ["Rôle", "role"],
] as const;

export default async function Page({ params }: Proprietes) {
  const { slug } = await params;
  const projet = projetParSlug(slug);
  if (!projet) notFound();

  const suivant = projetSuivant(projet.slug);
  const index = projets.findIndex((item) => item.slug === projet.slug);

  return (
    <article className="pb-16 sm:pb-24">
      <div className="mx-auto max-w-6xl px-5 pt-6 sm:px-6 sm:pt-8">
        <Link
          href="/#projets"
          className="lien-nav inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.16em] text-douce hover:text-encre"
        >
          <IconeFlecheGauche />
          Projets
        </Link>
      </div>

      <header className="mt-6 grid lg:grid-cols-[1.15fr_0.85fr]">
        <div className="entrer-photo relative aspect-[3/2] bg-sable sm:aspect-[4/3] lg:aspect-auto lg:min-h-[78vh]">
          <Image
            src={projet.image}
            alt={projet.alt}
            fill
            priority
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center px-5 py-8 sm:px-10 sm:py-10 lg:py-14 lg:pr-8">
          <p
            className="entrer font-serif text-lg text-bronze sm:text-xl"
            style={{ animationDelay: "80ms" }}
          >
            {String(index + 1).padStart(2, "0")}
            <span className="mx-3 inline-block h-px w-8 translate-y-[-0.3em] bg-bronze/50 align-middle" />
            <span className="font-sans text-[0.72rem] uppercase tracking-[0.16em]">
              {projet.secteur}
            </span>
          </p>
          <h1
            className="entrer mt-2 font-serif text-[2rem] font-medium leading-[1.05] tracking-tight sm:mt-4 sm:text-6xl"
            style={{ animationDelay: "150ms" }}
          >
            {projet.nom}
          </h1>
          <p
            className="entrer mt-3 max-w-md text-[0.95rem] leading-7 text-douce sm:mt-4 sm:text-lg sm:leading-8"
            style={{ animationDelay: "220ms" }}
          >
            {projet.ligne}
          </p>
          <dl className="entrer mt-8" style={{ animationDelay: "300ms" }}>
            {faits.map(([libelle, cle]) => (
              <div
                key={cle}
                className="flex flex-col gap-1 border-t border-ligne py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
              >
                <dt className="text-[0.65rem] uppercase tracking-[0.14em] text-douce sm:text-[0.68rem] sm:tracking-[0.16em]">
                  {libelle}
                </dt>
                <dd className="text-[0.95rem] leading-6 sm:text-right">{projet[cle]}</dd>
              </div>
            ))}
          </dl>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="mt-10 grid gap-8 sm:mt-16 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveler>
            <section>
              <h2 className="font-serif text-2xl font-medium tracking-tight sm:text-3xl">Le contexte</h2>
              <p className="mt-3 text-[0.95rem] leading-7 text-douce sm:mt-4 sm:text-lg sm:leading-8">{projet.contexte}</p>
            </section>
          </Reveler>
          <Reveler delay={120}>
            <section>
              <h2 className="font-serif text-2xl font-medium tracking-tight sm:text-3xl">L’enjeu</h2>
              <p className="mt-3 text-[0.95rem] leading-7 text-douce sm:mt-4 sm:text-lg sm:leading-8">{projet.enjeu}</p>
            </section>
          </Reveler>
        </div>

        <Reveler>
          <blockquote className="mt-10 border-l-2 border-bronze py-1 pl-4 font-serif text-[1.45rem] font-medium leading-snug tracking-tight sm:mt-16 sm:py-2 sm:pl-6 sm:text-4xl">
            {projet.promesse}
          </blockquote>
        </Reveler>

        <section className="mt-10 sm:mt-16">
          <Reveler>
            <h2 className="font-serif text-2xl font-medium tracking-tight sm:text-3xl">Le déroulement</h2>
          </Reveler>
          <ol className="mt-6 grid gap-px bg-ligne sm:mt-8 sm:grid-cols-2 lg:grid-cols-3">
            {projet.phases.map((phase, phaseIndex) => (
              <li key={phase.numero} className="bg-papier p-5 sm:p-7">
                <Reveler delay={(phaseIndex % 3) * 80} className="h-full">
                  <p className="font-serif text-xl font-medium text-bronze sm:text-2xl">{phase.numero}</p>
                  <h3 className="mt-2 font-serif text-xl font-medium leading-tight tracking-tight sm:mt-3 sm:text-2xl">
                    {phase.titre}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-douce">{phase.texte}</p>
                </Reveler>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-10 grid items-start gap-8 sm:mt-16 sm:gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveler>
            <h2 className="font-serif text-2xl font-medium tracking-tight sm:text-3xl">Le rôle tenu</h2>
            <p className="mt-3 text-[0.95rem] leading-7 text-douce sm:mt-4 sm:text-lg sm:leading-8">{projet.tenue}</p>
          </Reveler>
          <Reveler delay={100}>
            <h2 className="font-serif text-2xl font-medium tracking-tight sm:text-3xl">Les personnes</h2>
            <ul className="mt-4 grid sm:grid-cols-2">
              {projet.equipe.map((personne) => (
                <li key={personne.nom} className="border-t border-ligne py-4 pr-4">
                  <p>{personne.nom}</p>
                  <p className="mt-1 text-sm leading-6 text-douce">{personne.role}</p>
                </li>
              ))}
            </ul>
          </Reveler>
        </section>
      </div>

      <section className="panneau-encre mt-10 bg-encre text-papier sm:mt-16">
        <div className="mx-auto max-w-6xl px-5 py-10 sm:px-6 sm:py-14">
          <Reveler>
            <h2 className="font-serif text-2xl font-medium tracking-tight sm:text-3xl">Ce qui a été retenu</h2>
            <ul className="mt-8 grid gap-8 sm:mt-10 sm:grid-cols-3 sm:gap-10">
              {projet.resultats.map((resultat) => (
                <li key={resultat.detail}>
                  <p className="chiffre-clair whitespace-nowrap font-serif text-4xl font-medium leading-none tracking-tight text-sable sm:text-6xl">
                    {resultat.valeur}
                  </p>
                  <p className="mt-3 max-w-xs text-sm leading-6 text-papier/75">{resultat.detail}</p>
                </li>
              ))}
            </ul>
          </Reveler>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveler>
          <section className="mt-10 grid items-end gap-6 border-t border-ligne pt-8 sm:mt-16 sm:gap-8 sm:pt-12 md:grid-cols-[1.2fr_auto]">
            <div>
              <h2 className="font-serif text-2xl font-medium tracking-tight sm:text-3xl">La suite</h2>
              <p className="mt-3 max-w-xl text-[0.95rem] leading-7 text-douce sm:mt-4 sm:text-lg sm:leading-8">{projet.suite}</p>
            </div>
            <Bouton href="/contact">
              Parler d’une mission
              <IconeFleche />
            </Bouton>
          </section>
        </Reveler>

        {suivant && (
          <div className="mt-20 border-t border-ligne pt-14">
            <Reveler>
              <p className="text-[0.72rem] uppercase tracking-[0.18em] text-douce">
                Projet suivant
              </p>
              <div className="mt-6 lg:max-w-3xl">
                <CarteProjet
                  projet={suivant}
                  index={projets.findIndex((item) => item.slug === suivant.slug)}
                  kicker={suivant.secteur}
                />
              </div>
            </Reveler>
          </div>
        )}
      </div>
    </article>
  );
}
