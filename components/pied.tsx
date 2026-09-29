import Link from "next/link";
import { Reveler } from "@/components/reveler";
import { profil } from "@/lib/contenu";

export function Pied() {
  return (
    <footer className="border-t border-ligne">
      <Reveler className="mx-auto grid max-w-6xl gap-6 px-5 py-10 sm:grid-cols-[1.3fr_1fr] sm:items-end sm:gap-8 sm:px-6 sm:py-12">
        <div>
          <p className="font-serif text-2xl font-medium tracking-tight sm:text-4xl">{profil.nom}</p>
          <p className="mt-2 text-sm text-douce">
            {profil.role}
            <span aria-hidden="true"> · </span>
            {profil.lieu}
          </p>
        </div>
        <nav aria-label="Pied de page" className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link href="/#projets" className="lien-nav text-douce hover:text-encre">
            Projets
          </Link>
          <Link href="/cv" className="lien-nav text-douce hover:text-encre">
            Parcours
          </Link>
          <Link href="/contact" className="lien-nav text-douce hover:text-encre">
            Contact
          </Link>
          <a
            href={profil.linkedin}
            target="_blank"
            rel="noreferrer"
            className="lien-nav text-douce hover:text-encre"
          >
            LinkedIn
          </a>
          <a href={`mailto:${profil.email}`} className="lien-nav text-douce hover:text-encre">
            {profil.email}
          </a>
        </nav>
      </Reveler>
    </footer>
  );
}
