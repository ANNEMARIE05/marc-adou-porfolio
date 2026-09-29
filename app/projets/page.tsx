import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CarteProjet } from "@/components/carte-projet";
import { Reveler } from "@/components/reveler";
import { profil, projets, projetsDe } from "@/lib/contenu";

const apercu = ["islam-paymoney", "gna-assurance", "maruvi"].flatMap((slug) => {
  const projet = projets.find((item) => item.slug === slug);
  return projet ? [projet] : [];
});

export const metadata: Metadata = {
  title: "Projets",
  description:
    `Projets de ${profil.nom} : GNA Assurance, Paymoney, CI-PME et MediClick.`,
};

export default function Page() {
  const [principal, ...secondaires] = apercu;

  return (
    <div className="mx-auto max-w-6xl px-5 py-8 sm:px-6 sm:py-16">
      <header>
        <p className="entrer text-[0.68rem] uppercase tracking-[0.2em] text-bronze">
          Sélection
        </p>
        <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h1
            className="entrer font-serif text-[2.4rem] font-medium leading-[0.95] tracking-tight sm:text-6xl"
            style={{ animationDelay: "80ms" }}
          >
            Projets
          </h1>
          <p
            className="entrer max-w-sm text-sm leading-6 text-douce sm:pb-1 sm:text-right"
            style={{ animationDelay: "140ms" }}
          >
            {projets.length} produits, de 2019 à aujourd’hui. Paiement, assurance, santé, tourisme.
          </p>
        </div>

        {principal ? (
          <div
            className="entrer-photo mt-7 grid grid-cols-2 gap-2 sm:mt-9 sm:grid-cols-[1.45fr_1fr] sm:gap-3"
            style={{ animationDelay: "180ms" }}
          >
            <Link
              href={`/projets/${principal.slug}`}
              className="cadre group relative col-span-2 aspect-[16/10] overflow-hidden bg-sable sm:col-span-1 sm:row-span-2 sm:aspect-auto sm:min-h-[24rem]"
            >
              <Image
                src={principal.image}
                alt={principal.alt}
                fill
                priority
                sizes="(min-width: 640px) 34rem, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <span className="pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/75 via-black/25 to-transparent px-3 pb-3 pt-12 sm:px-4 sm:pb-4">
                <span className="block text-[0.62rem] uppercase tracking-[0.16em] text-bronze">
                  {principal.secteur}
                </span>
                <span className="mt-1 block font-serif text-lg font-medium tracking-tight text-white sm:text-2xl">
                  {principal.nom}
                </span>
              </span>
            </Link>
            {secondaires.map((projet) => (
              <Link
                key={projet.slug}
                href={`/projets/${projet.slug}`}
                className="cadre group relative aspect-[4/3] overflow-hidden bg-sable sm:aspect-auto"
              >
                <Image
                  src={projet.image}
                  alt={projet.alt}
                  fill
                  sizes="(min-width: 640px) 22rem, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <span className="pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/75 via-black/20 to-transparent px-3 pb-2.5 pt-8 sm:pb-3">
                  <span className="block font-serif text-sm font-medium tracking-tight text-white sm:text-lg">
                    {projet.nom}
                  </span>
                </span>
              </Link>
            ))}
          </div>
        ) : null}
      </header>

      <div className="mt-12 sm:mt-16">
        {profil.experiences.map((experience) => (
          <section key={experience.structure} className="mt-12 first:mt-0">
            <Reveler>
              <p className="text-[0.68rem] uppercase tracking-[0.16em] text-bronze">
                {experience.periodeCourte}
              </p>
              <h2 className="mt-2 font-serif text-3xl font-medium tracking-tight sm:text-4xl">
                {experience.structure}
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-douce">
                {experience.titre}. {experience.texte}
              </p>
            </Reveler>
            <div className="mt-6 grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12">
              {projetsDe(experience.structure).map((projet) => (
                <Reveler key={projet.slug} className="h-full">
                  <CarteProjet
                    projet={projet}
                    index={projets.findIndex((item) => item.slug === projet.slug)}
                  />
                </Reveler>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
