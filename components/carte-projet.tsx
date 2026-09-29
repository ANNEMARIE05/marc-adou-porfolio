import Image from "next/image";
import Link from "next/link";
import type { Projet } from "@/lib/contenu";

type Proprietes = {
  projet: Projet;
  index?: number;
  priorite?: boolean;
};

export function CarteProjet({ projet, index = 0, priorite = false }: Proprietes) {
  return (
    <Link href={`/projets/${projet.slug}`} className="group flex h-full flex-col">
      <div className="masque cadre relative aspect-[4/3] w-full overflow-hidden bg-sable">
        <Image
          src={projet.image}
          alt={projet.alt}
          fill
          priority={priorite}
          sizes="(min-width: 1024px) 36rem, 50vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
        />
      </div>
      <div className="mt-3 border-t border-ligne pt-3 sm:mt-4 sm:pt-4">
        <p className="text-[0.58rem] uppercase tracking-[0.12em] text-bronze sm:text-[0.68rem] sm:tracking-[0.16em]">
          <span>{String(index + 1).padStart(2, "0")}</span>
          <span aria-hidden="true"> · </span>
          <span>{projet.structure}</span>
          <span className="text-douce"> · {projet.periode}</span>
        </p>
        <h3 className="mt-1 font-serif text-[1.05rem] font-medium leading-tight tracking-tight text-encre transition-colors duration-300 group-hover:text-bronze sm:text-[1.85rem]">
          {projet.nom}
        </h3>
        <p className="mt-1.5 line-clamp-3 text-[0.75rem] leading-5 text-douce sm:text-sm sm:leading-6">
          {projet.ligne}
        </p>
      </div>
    </Link>
  );
}
