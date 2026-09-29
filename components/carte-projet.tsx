import Image from "next/image";
import Link from "next/link";
import type { Projet } from "@/lib/contenu";
import { IconeFleche } from "@/components/icones";

type Proprietes = {
  projet: Projet;
  index?: number;
  kicker?: string;
  priorite?: boolean;
};

export function CarteProjet({
  projet,
  index = 0,
  kicker,
  priorite = false,
}: Proprietes) {
  const etiquette = kicker ?? projet.secteur;

  return (
    <Link
      href={`/projets/${projet.slug}`}
      className="group flex h-full items-center gap-3.5 sm:flex-col sm:items-stretch sm:gap-0"
    >
      <div className="masque relative aspect-[3/4] w-[6.25rem] shrink-0 overflow-hidden bg-sable min-[400px]:w-[7.25rem] sm:aspect-[4/3] sm:w-full">
        <Image
          src={projet.image}
          alt={projet.alt}
          fill
          priority={priorite}
          sizes="(min-width: 640px) 36rem, 8rem"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
        />
        <span className="carte-trait" aria-hidden="true" />
      </div>
      <div className="flex min-w-0 flex-1 items-start justify-between gap-3 sm:mt-4 sm:gap-5 sm:border-t sm:border-ligne sm:pt-4">
        <div className="min-w-0 flex-1">
          <p className="flex flex-wrap items-center gap-x-1.5 gap-y-0.5 text-[0.6rem] uppercase tracking-[0.12em] text-bronze min-[400px]:text-[0.62rem] min-[400px]:tracking-[0.14em] sm:gap-x-3 sm:text-[0.68rem] sm:tracking-[0.16em]">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <span className="hidden h-px w-5 bg-bronze/50 sm:inline" aria-hidden="true" />
            <span>{etiquette}</span>
            <span className="text-douce">{projet.annee}</span>
          </p>
          <h3 className="mt-1 font-serif text-[1.35rem] font-medium leading-[1.05] tracking-tight text-encre transition-colors duration-300 group-hover:text-bronze min-[400px]:text-[1.5rem] sm:mt-2 sm:text-[2.15rem] sm:leading-none">
            {projet.nom}
          </h3>
          <p className="mt-1.5 text-[0.8125rem] leading-5 text-douce sm:mt-2 sm:line-clamp-2 sm:min-h-[3rem] sm:text-sm sm:leading-6">
            {projet.ligne}
          </p>
        </div>
        <IconeFleche className="mt-1 hidden h-5 w-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1.5 sm:block" />
      </div>
    </Link>
  );
}
