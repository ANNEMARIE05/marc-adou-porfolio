import Image from "next/image";
import Link from "next/link";
import { Bouton } from "@/components/bouton";
import { CarteProjet } from "@/components/carte-projet";
import { IconeFleche } from "@/components/icones";
import { Reveler } from "@/components/reveler";
import { profil, projets } from "@/lib/contenu";

export default function Page() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl grid-cols-[6.25rem_minmax(0,1fr)] items-center gap-x-3.5 gap-y-5 px-5 pb-4 pt-6 min-[400px]:grid-cols-[7.25rem_minmax(0,1fr)] min-[400px]:gap-x-4 sm:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] sm:gap-x-14 sm:px-6 sm:pt-12 lg:gap-x-16">
        <figure className="entrer-photo sm:row-span-2 sm:self-center">
          <div className="cadre relative aspect-[3/4] w-full overflow-hidden bg-sable">
            <Image
              src={profil.portrait}
              alt={profil.altPortrait}
              fill
              priority
              sizes="(min-width: 640px) 40vw, 8rem"
              className="object-cover object-center"
            />
          </div>
        </figure>

        <div>
          <p
            className="entrer text-[0.62rem] uppercase leading-4 tracking-[0.12em] text-bronze sm:text-[0.72rem] sm:leading-normal sm:tracking-[0.22em]"
            style={{ animationDelay: "80ms" }}
          >
            {profil.role}
          </p>
          <h1
            className="entrer mt-1 flex flex-wrap items-baseline gap-x-[0.28em] font-serif text-[1.55rem] font-medium leading-[0.95] tracking-[-0.03em] text-encre min-[400px]:text-[1.85rem] sm:mt-3 sm:text-[clamp(2.5rem,4.6vw,4.2rem)] sm:leading-[0.92]"
            style={{ animationDelay: "150ms" }}
          >
            <span>{profil.nom.split(" ")[0]}</span>
            <span>{profil.nom.split(" ").slice(1).join(" ")}</span>
          </h1>
          <p
            className="entrer mt-3 hidden text-[0.72rem] uppercase tracking-[0.18em] text-douce sm:block"
            style={{ animationDelay: "210ms" }}
          >
            {profil.pratiques.join("   ·   ")}
          </p>
        </div>

        <div className="col-span-2 sm:col-span-1">
          <p className="entrer mb-3 text-[0.65rem] uppercase tracking-[0.14em] text-douce sm:hidden">
            {profil.pratiques.join("   ·   ")}
          </p>
          <p
            className="entrer font-serif text-[1.2rem] font-medium italic leading-snug tracking-tight text-encre min-[400px]:text-[1.35rem] sm:text-[1.7rem]"
            style={{ animationDelay: "240ms" }}
          >
            {profil.accroche}
          </p>
          <p
            className="entrer mt-3 max-w-md text-[0.95rem] leading-7 text-douce sm:text-base sm:leading-8"
            style={{ animationDelay: "300ms" }}
          >
            {profil.bio}
          </p>

          <ul
            className="entrer mt-5 flex flex-col gap-2 text-sm sm:mt-8"
            style={{ animationDelay: "340ms" }}
          >
            <li>
              <a
                href={profil.linkedin}
                target="_blank"
                rel="noreferrer"
                className="lien-nav inline-flex items-center gap-2 text-encre"
              >
                LinkedIn
                <IconeFleche className="h-3.5 w-3.5" />
              </a>
            </li>
            <li>
              <a href={`mailto:${profil.email}`} className="lien-nav text-encre">
                {profil.email}
              </a>
            </li>
          </ul>

          <dl
            className="entrer mt-6 grid grid-cols-3 gap-3 border-t border-ligne pt-5 sm:mt-8 sm:gap-4 sm:pt-6"
            style={{ animationDelay: "410ms" }}
          >
            {profil.chiffres.map((chiffre) => (
              <div key={chiffre.detail}>
                <dt className="chiffre whitespace-nowrap font-serif text-[1.45rem] font-medium leading-none tracking-tight min-[400px]:text-2xl sm:text-4xl">
                  {chiffre.valeur}
                </dt>
                <dd className="mt-1.5 text-[0.65rem] leading-snug text-balance text-douce min-[400px]:text-[0.7rem] sm:mt-2 sm:text-xs sm:leading-5">
                  {chiffre.detail}
                </dd>
              </div>
            ))}
          </dl>

          <div
            className="entrer mt-6 flex flex-wrap gap-3 sm:mt-8"
            style={{ animationDelay: "480ms" }}
          >
            <Bouton href="/projets">
              Voir les projets
              <IconeFleche />
            </Bouton>
            <Bouton href="/parcours" variante="ligne">
              Le parcours
            </Bouton>
          </div>
        </div>
      </section>

      <section id="projets" className="mt-8 scroll-mt-24 border-t border-ligne sm:mt-10">
        <div className="mx-auto max-w-6xl px-5 py-10 sm:px-6 sm:py-20">
          <Reveler>
            <p className="text-[0.68rem] uppercase tracking-[0.2em] text-bronze">Sélection</p>
            <div className="mt-2 flex items-end justify-between gap-4">
              <h2 className="font-serif text-[1.75rem] font-medium tracking-tight sm:text-5xl">
                Projets
              </h2>
              <Link
                href="/projets"
                aria-label="Tous les projets"
                className="lien-nav -mr-2 mb-0.5 inline-flex items-center p-2.5 text-bronze sm:mb-1"
              >
                <IconeFleche className="h-5 w-5 sm:h-6 sm:w-6" />
              </Link>
            </div>
          </Reveler>
          <div className="mt-7 grid grid-cols-2 gap-x-3 gap-y-8 sm:mt-12 sm:gap-x-8 sm:gap-y-14">
            {projets.slice(0, 4).map((projet, index) => (
              <Reveler key={projet.slug} delay={(index % 2) * 90} className="h-full">
                <CarteProjet projet={projet} index={index} priorite={index < 2} />
              </Reveler>
            ))}
          </div>
          <div className="mt-10 flex justify-center sm:mt-14">
            <Bouton href="/projets" variante="ligne">
              Voir tous les projets
              <IconeFleche />
            </Bouton>
          </div>
        </div>
      </section>

      <section className="border-t border-bronze/40 bg-sable text-encre">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-20">
          <Reveler>
            <p className="text-[0.68rem] uppercase tracking-[0.2em] text-bronze">Écrire</p>
            <h2 className="mt-3 max-w-2xl font-serif text-[1.6rem] font-medium leading-[1.15] tracking-tight sm:text-5xl">
              {profil.invitationTitre}
            </h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-douce sm:text-base">
              {profil.invitationTexte}
            </p>
            <div className="mt-8">
              <Bouton href="/contact" variante="clair">
                Écrire
                <IconeFleche />
              </Bouton>
            </div>
          </Reveler>
        </div>
      </section>
    </>
  );
}
