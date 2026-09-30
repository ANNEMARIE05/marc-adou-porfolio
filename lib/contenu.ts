/**
 * Textes du portfolio : coordonnées, parcours, projets, formation, outils et langues.
 */

export type Experience = {
  periode: string;
  periodeCourte: string;
  periodeCv: string;
  titre: string;
  structure: string;
  domaines: string;
  texte: string;
};

export type Formation = {
  periode: string;
  etablissement: string;
  titre: string;
};

export type Projet = {
  slug: string;
  nom: string;
  ligne: string;
  structure: string;
  periode: string;
  secteur: string;
  support?: string;
  image: string;
  alt: string;
};

export const profil = {
  nom: "Marc Adou",
  role: "Product Designer",
  precision: "UX/UI, spécialisé dans la fintech",
  pratiques: ["UX/UI", "Fintech", "Produit"],
  pays: "Côte d’Ivoire",
  email: "marcadou96@gmail.com",
  telephone: "+225 07 49 74 92 38",
  telephoneLien: "tel:+2250749749238",
  linkedin: "https://www.linkedin.com/in/marcadou225",
  behance: "https://www.behance.net/marcadou",
  instagram: "https://www.instagram.com/marcadou225/",
  instagramNom: "@marcadou225",
  cv: "/documents/CV-Marc-Adou.pdf",
  accroche: "Des interfaces qui simplifient des parcours complexes.",
  bio: "Product designer UX/UI, spécialisé dans la fintech. Je conçois des interfaces pour les paiements, l’onboarding et la gestion de compte, là où la réglementation et la confiance pèsent autant que le geste.",
  chiffres: [
    { valeur: "2022", detail: "à aujourd’hui, senior chez NGSER" },
    { valeur: "2020", detail: "à 2022, UX designer chez VEONE" },
    { valeur: "2019", detail: "à 2020, UX designer chez AFINOV" },
  ],
  portrait: "/images/portrait.jpg",
  altPortrait: "Portrait de Marc Adou, product designer.",
  invitationTitre: "Un parcours à simplifier.",
  invitationTexte:
    "Paiement, onboarding, gestion de compte. Un message suffit : le contexte, et ce que l’interface doit rendre plus clair.",
  disponibilite:
    "Conception d’interfaces web et mobile, de l’analyse des besoins à la validation. Je réponds en personne.",
  introParcours:
    "Depuis 2022, et encore aujourd’hui, senior UX designer chez NGSER. Avant cela, VEONE, puis AFINOV : des produits web et mobile, de la fintech au service public, à la santé et au tourisme.",
  introCv:
    "Product Designer, UX/UI spécialisé dans les fintech, je conçois des interfaces qui simplifient des parcours complexes (paiements, onboarding, gestion de compte) tout en répondant à des enjeux réglementaires et de confiance forts.",
  experiences: [
    {
      periode: "2022 — aujourd’hui",
      periodeCourte: "2022 — aujourd’hui",
      periodeCv: "Depuis février 2022, Côte d’Ivoire",
      titre: "Senior UX Designer",
      structure: "NGSER",
      domaines: "IT · Transformation digitale · FinTech",
      texte:
        "Conception et optimisation d’expériences digitales web & mobile, de l’analyse des besoins à la validation des solutions.",
    },
    {
      periode: "Décembre 2020 — janvier 2022",
      periodeCourte: "2020 — 2022",
      periodeCv: "Décembre 2020 – janvier 2022, Côte d’Ivoire",
      titre: "UX Designer",
      structure: "VEONE",
      domaines: "IT · Software · Transformation digitale",
      texte:
        "Conception de produits digitaux et optimisation de parcours utilisateurs sur des projets web & mobile.",
    },
    {
      periode: "Juin 2019 — novembre 2020",
      periodeCourte: "2019 — 2020",
      periodeCv: "Juin 2019 – novembre 2020, Côte d’Ivoire",
      titre: "UX Designer",
      structure: "AFINOV",
      domaines: "IT · Édition logicielle · Transformation digitale · Agro-industrie",
      texte:
        "Conception de produits digitaux dans les secteurs public, santé, tourisme et services financiers.",
    },
  ] satisfies Experience[],
  formation: [
    {
      periode: "2024 — 2025",
      etablissement: "IAE Nice — Université Côte d’Azur",
      titre: "Master 2 en Marketing Digital",
    },
    {
      periode: "2014 — 2017",
      etablissement: "Groupe CSI — Pôle Polytechnique",
      titre: "Licence professionnelle en science informatique option Génie Logiciel",
    },
  ] satisfies Formation[],
  langues: [
    { nom: "Français", niveau: "Langue maternelle" },
    { nom: "Anglais", niveau: "Intermédiaire (B2)" },
  ],
  outils: [
    "Figma / Figma Make",
    "Adobe XD",
    "Adobe Illustrator",
    "Adobe Photoshop",
    "Framer",
    "Claude / Claude Code",
  ],
  competences: [
    "UX Research",
    "User flows",
    "Wireframing",
    "Design Thinking",
    "Prototypage",
    "Tests utilisateurs",
    "UI Design",
    "Design Systems",
    "AI Assisted Design",
    "Product Strategy",
    "Storytelling",
  ],
};

export const projets: Projet[] = [
  {
    slug: "gna-assurance",
    nom: "GNA Assurance",
    ligne:
      "Recherche utilisateur, conception des parcours et prototypage haute fidélité pour la souscription digitale.",
    structure: "NGSER",
    periode: "2022 — aujourd’hui",
    secteur: "Assurance",
    support: "Souscription digitale",
    image: "/images/projets/gna-assurance.png",
    alt: "Dossier clair et stylo de laiton sur une pierre noire.",
  },
  {
    slug: "bridge-security",
    nom: "Bridge Security",
    ligne: "Conception d’un back-office métier et optimisation des workflows opérationnels.",
    structure: "NGSER",
    periode: "2022 — aujourd’hui",
    secteur: "Sécurité",
    support: "Back-office",
    image: "/images/projets/bridge-security.png",
    alt: "Clé noire et badge d’acier sur un bureau sombre.",
  },
  {
    slug: "islam-plus",
    nom: "Islam+",
    ligne:
      "Conception et refonte des parcours web et mobile d’Islam+, en intégrant les retours utilisateurs.",
    structure: "NGSER",
    periode: "2022 — aujourd’hui",
    secteur: "Paiement",
    support: "Web et mobile",
    image: "/images/projets/islam-paymoney.png",
    alt: "Téléphone retourné et pièces sur un linge sombre.",
  },
  {
    slug: "paymoney",
    nom: "Paymoney",
    ligne:
      "Conception et refonte des parcours web et mobile de Paymoney, en intégrant les retours utilisateurs.",
    structure: "NGSER",
    periode: "2022 — aujourd’hui",
    secteur: "Paiement",
    support: "Web et mobile",
    image: "/images/projets/islam-paymoney.png",
    alt: "Téléphone retourné et pièces sur un linge sombre.",
  },
  {
    slug: "change-numero-a-10",
    nom: "Change Numéro à 10",
    ligne:
      "Conception du parcours et prototype mobile pour accompagner la migration nationale.",
    structure: "VEONE",
    periode: "2020 — 2022",
    secteur: "Service public",
    support: "Mobile",
    image: "/images/projets/change-numero.png",
    alt: "Téléphone et carte claire sur une pierre noire.",
  },
  {
    slug: "ci-pme",
    nom: "CI-PME",
    ligne:
      "Conception des expériences web & mobile d’une plateforme dédiée à l’accompagnement des PME.",
    structure: "VEONE",
    periode: "2020 — 2022",
    secteur: "PME",
    support: "Web et mobile",
    image: "/images/projets/ci-pme.png",
    alt: "Carnet ouvert et crayon sur une table en chêne.",
  },
  {
    slug: "gateway",
    nom: "Gateway",
    ligne:
      "Conception et refonte des interfaces et parcours de Gateway, à partir des besoins métier et des retours utilisateurs.",
    structure: "VEONE",
    periode: "2020 — 2022",
    secteur: "Télécom",
    image: "/images/projets/gateway-mtn.png",
    alt: "Clé de voiture et téléphone sur une pierre noire.",
  },
  {
    slug: "mtn-drive",
    nom: "MTN Drive",
    ligne:
      "Conception et refonte des interfaces et parcours de MTN Drive, à partir des besoins métier et des retours utilisateurs.",
    structure: "VEONE",
    periode: "2020 — 2022",
    secteur: "Télécom",
    image: "/images/projets/gateway-mtn.png",
    alt: "Clé de voiture et téléphone sur une pierre noire.",
  },
  {
    slug: "rti",
    nom: "RTI",
    ligne:
      "Conception du produit web de gestion du parc automobile, centrée sur les besoins utilisateurs et contraintes métier.",
    structure: "AFINOV",
    periode: "2019 — 2020",
    secteur: "Média",
    support: "Web",
    image: "/images/projets/rti.png",
    alt: "Trousseau de clés et carnet fermé sur une table sombre.",
  },
  {
    slug: "mediclick",
    nom: "MediClick",
    ligne:
      "Conception des expériences mobiles agent & patient pour digitaliser la relation médecin - patient.",
    structure: "AFINOV",
    periode: "2019 — 2020",
    secteur: "Santé",
    support: "Mobile",
    image: "/images/projets/mediclick.png",
    alt: "Stéthoscope et téléphone sur une pierre claire.",
  },
  {
    slug: "maruvi",
    nom: "Maruvi",
    ligne:
      "Conception des interfaces web & mobile et optimisation du parcours de réservation.",
    structure: "AFINOV",
    periode: "2019 — 2020",
    secteur: "Tourisme",
    support: "Web et mobile",
    image: "/images/projets/maruvi.png",
    alt: "Linge écru, carnet et clé de laiton sur du bois sombre.",
  },
  {
    slug: "wallet-banking",
    nom: "Wallet / Banking",
    ligne:
      "Conception de prototypes d’applications financières, intégrant les retours utilisateurs, déployés au Nigeria.",
    structure: "AFINOV",
    periode: "2019 — 2020",
    secteur: "Banque",
    support: "Applications financières",
    image: "/images/projets/wallet-banking.png",
    alt: "Portefeuille de cuir fermé et téléphone sur une pierre sombre.",
  },
];

export function projetParSlug(slug: string) {
  return projets.find((projet) => projet.slug === slug);
}

export function projetSuivant(slug: string) {
  const index = projets.findIndex((projet) => projet.slug === slug);
  if (index < 0) return undefined;
  return projets[(index + 1) % projets.length];
}

export function experienceParStructure(structure: string) {
  return profil.experiences.find((experience) => experience.structure === structure);
}

export function projetsDe(structure: string) {
  return projets.filter((projet) => projet.structure === structure);
}
