import type { Metadata } from "next";
import { Bouton } from "@/components/bouton";
import { IconeFleche } from "@/components/icones";
import { profil } from "@/lib/contenu";
import { Formulaire } from "./formulaire";

export const metadata: Metadata = {
  title: "Contact",
  description: "Écrire à Marc Adou, marketing digital. Adresse, LinkedIn et message.",
};

export default function Page() {
  return (
    <div className="lg:grid lg:min-h-[calc(100svh-4.75rem)] lg:grid-cols-2">
      <section className="panneau-encre relative flex flex-col justify-between overflow-hidden bg-encre px-5 py-10 text-papier sm:px-12 sm:py-14 lg:py-16">
        <span className="filet-colonne" aria-hidden="true" />
        <div>
          <p
            className="entrer text-[0.65rem] uppercase tracking-[0.16em] text-papier/60 sm:text-[0.72rem] sm:tracking-[0.22em]"
            style={{ animationDelay: "40ms" }}
          >
            {profil.role}
            <span aria-hidden="true"> · </span>
            {profil.lieu}
          </p>
          <h1
            className="entrer mt-3 font-serif text-[1.85rem] font-medium leading-[1.05] tracking-tight sm:mt-4 sm:text-6xl"
            style={{ animationDelay: "110ms" }}
          >
            Écrire à Marc
          </h1>
          <p
            className="entrer mt-4 max-w-sm text-[0.95rem] leading-7 text-papier/75 sm:mt-6 sm:text-lg sm:leading-8"
            style={{ animationDelay: "180ms" }}
          >
            {profil.disponibilite}
          </p>
        </div>

        <div className="entrer mt-8 space-y-5 sm:mt-16 sm:space-y-6" style={{ animationDelay: "260ms" }}>
          <p>
            <a
              href={`mailto:${profil.email}`}
              className="lien-nav break-words font-serif text-lg font-medium leading-snug tracking-tight sm:text-4xl"
            >
              {profil.email}
            </a>
          </p>
          <p>
            <a
              href={profil.linkedin}
              target="_blank"
              rel="noreferrer"
              className="lien-nav inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.16em] text-papier/80"
            >
              LinkedIn
              <IconeFleche className="h-3.5 w-3.5" />
            </a>
          </p>
          <div className="pt-2">
            <Bouton href="/cv" variante="clair">
              Voir le parcours
            </Bouton>
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-center px-5 py-10 sm:px-12 sm:py-14 lg:py-16">
        <div className="entrer mx-auto w-full max-w-md" style={{ animationDelay: "180ms" }}>
          <h2 className="font-serif text-2xl font-medium tracking-tight sm:text-3xl">Le message</h2>
          <p className="mt-3 text-sm leading-6 text-douce">
            Trois champs. Votre messagerie s’ouvre avec le texte déjà rédigé.
          </p>
          <Formulaire />
        </div>
      </section>
    </div>
  );
}
