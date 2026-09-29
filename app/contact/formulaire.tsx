"use client";

import { FormEvent, useState } from "react";
import { classeBouton } from "@/components/bouton";
import { IconeFleche } from "@/components/icones";
import { profil } from "@/lib/contenu";

const champ =
  "mt-2 w-full border border-ligne bg-sable/45 px-4 py-3.5 text-base text-encre outline-none transition duration-300 placeholder:text-douce/55 focus:border-encre focus:bg-papier";

export function Formulaire() {
  const [statut, setStatut] = useState("");

  function envoyer(evenement: FormEvent<HTMLFormElement>) {
    evenement.preventDefault();
    const donnees = new FormData(evenement.currentTarget);
    if (String(donnees.get("site") || "").trim()) return;

    const nom = String(donnees.get("nom") || "").trim();
    const email = String(donnees.get("email") || "").trim();
    const message = String(donnees.get("message") || "").trim();
    const sujet = encodeURIComponent(`Portfolio — ${nom}`);
    const corps = encodeURIComponent(`${message}\n\n— ${nom}\n${email}`);

    setStatut("Votre messagerie s’ouvre, avec le message déjà rédigé.");
    window.location.href = `mailto:${profil.email}?subject=${sujet}&body=${corps}`;
  }

  return (
    <form onSubmit={envoyer} className="mt-8 space-y-5" noValidate={false}>
      <div className="absolute -left-[9999px] h-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="site">Site</label>
        <input id="site" name="site" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label htmlFor="nom" className="text-[0.72rem] uppercase tracking-[0.16em] text-douce">
          Nom
        </label>
        <input id="nom" name="nom" type="text" required autoComplete="name" className={champ} />
      </div>
      <div>
        <label htmlFor="email" className="text-[0.72rem] uppercase tracking-[0.16em] text-douce">
          E-mail
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={champ}
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="text-[0.72rem] uppercase tracking-[0.16em] text-douce"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="Le contexte, le calendrier, ce que vous attendez."
          className={`${champ} resize-y`}
        />
      </div>
      <button type="submit" className={classeBouton("plein")}>
        Envoyer
        <IconeFleche />
      </button>
      <p role="status" className="min-h-6 text-sm text-bronze">
        {statut}
      </p>
    </form>
  );
}
