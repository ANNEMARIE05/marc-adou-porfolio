import { Bouton } from "@/components/bouton";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-6 py-32 text-center">
      <p className="entrer text-[0.72rem] uppercase tracking-[0.22em] text-bronze">404</p>
      <h1 className="entrer mt-4 font-serif text-5xl tracking-tight" style={{ animationDelay: "90ms" }}>
        Cette page n’existe pas.
      </h1>
      <p className="entrer mt-4 leading-7 text-douce" style={{ animationDelay: "160ms" }}>
        Le portfolio tient sur l’accueil, les projets, le contact et le CV.
      </p>
      <div className="entrer mt-8" style={{ animationDelay: "230ms" }}>
        <Bouton href="/">Retour à l’accueil</Bouton>
      </div>
    </div>
  );
}
