import Link from "next/link";

type Variante = "plein" | "ligne" | "clair";

export function classeBouton(variante: Variante = "plein") {
  return `bouton bouton-${variante} inline-flex items-center justify-center gap-2.5 px-5 py-3 text-[0.68rem] uppercase tracking-[0.14em] sm:gap-3 sm:px-6 sm:py-3.5 sm:text-[0.72rem] sm:tracking-[0.18em]`;
}

type Proprietes = {
  href: string;
  children: React.ReactNode;
  variante?: Variante;
};

export function Bouton({ href, children, variante = "plein" }: Proprietes) {
  return (
    <Link href={href} className={classeBouton(variante)}>
      {children}
    </Link>
  );
}
