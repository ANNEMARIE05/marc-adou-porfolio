"use client";

import { classeBouton } from "@/components/bouton";
import { IconeDocument } from "@/components/icones";

export function Imprimer() {
  return (
    <div className="no-print">
      <button type="button" onClick={() => window.print()} className={classeBouton("ligne")}>
        <IconeDocument />
        Enregistrer le CV
      </button>
      <p className="mt-3 max-w-sm text-sm leading-6 text-douce">
        Dans la fenêtre d’impression, choisissez « Enregistrer au format PDF ».
      </p>
    </div>
  );
}
