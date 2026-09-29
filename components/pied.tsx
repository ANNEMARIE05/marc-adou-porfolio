import { profil } from "@/lib/contenu";

export function Pied() {
  return (
    <footer className="border-t border-ligne">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-5 gap-y-1 py-5 pl-5 pr-16 text-sm text-douce sm:pl-6 sm:pr-20">
        <p>© {new Date().getFullYear()} {profil.nom}</p>
        <a href={`mailto:${profil.email}`} className="lien-nav hover:text-encre">
          {profil.email}
        </a>
      </div>
    </footer>
  );
}
