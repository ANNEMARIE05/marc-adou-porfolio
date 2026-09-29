/**
 * Textes du portfolio. Coordonnées, portrait, parcours et projets se modifient ici.
 * Les études, les chiffres et le portrait sont une base rédigée : à remplacer
 * par les missions, les résultats et la photo réels de Marc.
 */

export type Phase = {
  numero: string;
  titre: string;
  texte: string;
};

export type Personne = {
  nom: string;
  role: string;
};

export type Resultat = {
  valeur: string;
  detail: string;
};

export type Experience = {
  periode: string;
  titre: string;
  structure?: string;
  lieu: string;
  texte: string;
};

export type Projet = {
  slug: string;
  nom: string;
  ligne: string;
  client: string;
  secteur: string;
  annee: string;
  duree: string;
  role: string;
  image: string;
  alt: string;
  contexte: string;
  enjeu: string;
  promesse: string;
  tenue: string;
  phases: Phase[];
  equipe: Personne[];
  resultats: Resultat[];
  suite: string;
};

export const profil = {
  nom: "Marc Adou",
  role: "Marketing digital",
  pratiques: ["Stratégie", "Récit", "Lancement"],
  lieu: "Abidjan",
  email: "bonjour@marcadou.com",
  linkedin: "https://www.linkedin.com/in/marc-adou",
  accroche: "D’abord une phrase que la marque peut tenir.",
  bio: "Le marketing digital vient ensuite : le récit, la campagne, et ce que le marché en fait vraiment. Six ans à Abidjan, de l’agence à la mission.",
  chiffres: [
    { valeur: "6 ans", detail: "auprès des marques" },
    { valeur: "2018", detail: "premières campagnes" },
    { valeur: "2024", detail: "en indépendant" },
  ],
  portrait: "/images/portrait.png",
  altPortrait:
    "Portrait de Marc Adou, en veste de lin sombre, sur fond clair.",
  invitationTitre: "Une marque à clarifier, une campagne à tenir.",
  invitationTexte:
    "Marc en prend peu à la fois. Un message suffit : le contexte, le calendrier, et ce que vous attendez de voir bouger.",
  disponibilite:
    "Stratégie, lancement, campagne. Marc répond en personne, et il reste jusqu’au marché.",
  introCv:
    "Marc Adou pratique le marketing digital auprès de maisons et de produits numériques. Il pose le récit, puis il conduit la campagne jusqu’à ce qu’elle se lise dans les faits.",
  formation: {
    annee: "2018",
    titre: "Marketing digital et communication",
  },
  langues: [
    { nom: "Français", niveau: "Maternel" },
    { nom: "Anglais", niveau: "Professionnel" },
  ],
  experiences: [
    {
      periode: "2024 — aujourd’hui",
      titre: "Conseil en marketing digital",
      lieu: "Abidjan",
      texte:
        "Maisons, tables, produits numériques. Peu de missions en même temps, chacune suivie jusqu’à ce que le marché reprenne la phrase.",
    },
    {
      periode: "2021 — 2024",
      titre: "Responsable marketing digital",
      structure: "Maison Helia",
      lieu: "Abidjan",
      texte:
        "Une équipe de trois, des lancements, et le fil tenu entre l’agence et celles et ceux qui vendent.",
    },
    {
      periode: "2018 — 2021",
      titre: "Chargé de marque",
      structure: "Agence Sève",
      lieu: "Abidjan",
      texte:
        "Alimentaire, beauté, services. Écouter d’abord, poser la plateforme, briefer sans disperser le message.",
    },
  ] satisfies Experience[],
};

export const projets: Projet[] = [
  {
    slug: "solene",
    nom: "Solène",
    ligne: "Sortir du cercle des initiés, sans perdre l’atelier.",
    client: "Maison Solène",
    secteur: "Parfum",
    annee: "2025",
    duree: "5 mois",
    role: "Stratégie de marque et lancement",
    image: "/images/solene.png",
    alt: "Flacon de parfum clair posé sur une pierre, à côté d’un linge écru.",
    contexte:
      "Maison Solène compose des parfums à Abidjan depuis douze ans. Deux eaux, une clientèle fidèle, quelques comptoirs. Le fondateur préparait une troisième composition et voulait sortir du cercle des initiés, sans devenir une marque de luxe interchangeable.",
    enjeu:
      "Trouver une promesse qui parle au-delà des connaisseurs, tout en gardant le geste de l’atelier. La maison parlait de notes. Les clientes parlaient d’un moment de la journée. L’écart était là.",
    promesse: "« Un parfum pour le moment où la journée se pose. »",
    tenue:
      "Marc a défini la promesse, le récit de campagne et l’ordre du lancement. Il a réuni la direction artistique, la photographie et la presse autour d’un même message, puis ajusté ce message après les premiers retours de comptoir.",
    phases: [
      {
        numero: "01",
        titre: "Écoute",
        texte:
          "Six entretiens : le fondateur, le nez, deux vendeuses, trois clientes. Lecture des comptes, des avis, et de quatre maisons proches par le prix. Rien n’a été écrit avant ces conversations.",
      },
      {
        numero: "02",
        titre: "Diagnostic",
        texte:
          "Le vocabulaire de la maison était technique. Le souvenir des clientes était sensoriel, lié à la fin de journée. Ce décalage est devenu le point de départ, plutôt qu’un nouveau logo.",
      },
      {
        numero: "03",
        titre: "Promesse",
        texte:
          "Territoire du soir, sans les codes du luxe affiché. Trois preuves retenues, et seulement trois : la composition, le flacon repris à la main, l’atelier visible. Tout le reste a été mis de côté.",
      },
      {
        numero: "04",
        titre: "Campagne",
        texte:
          "Six semaines, une idée par visuel. D’abord le récit du fondateur, puis trois portraits de clientes, puis la nouvelle eau. Textes courts, relus chaque semaine avec la boutique pour coller à ce qui se disait vraiment.",
      },
      {
        numero: "05",
        titre: "Mise en marché",
        texte:
          "Une liste d’attente avant l’arrivée en flacon. Dix revendeurs choisis, plutôt qu’une diffusion large. Un dossier presse de huit pages. Un point hebdomadaire sur les questions posées au comptoir.",
      },
      {
        numero: "06",
        titre: "Lecture",
        texte:
          "Le mot « soir » était trop étroit : une partie des clientes portait l’eau le matin. La promesse a été élargie au moment où la journée se pose, sans changer les visuels. Les ventes ont suivi.",
      },
    ],
    equipe: [
      { nom: "Marc Adou", role: "Stratégie, récit, plan de lancement" },
      { nom: "Inès Bamba", role: "Direction artistique" },
      { nom: "Studio Clair", role: "Photographie" },
      { nom: "Paul Ehouman", role: "Relations presse" },
      { nom: "Le nez de la maison", role: "Composition et relecture des preuves" },
    ],
    resultats: [
      { valeur: "1 200", detail: "inscriptions avant la mise en flacon" },
      { valeur: "22", detail: "revendeurs au sixième mois" },
      { valeur: "9", detail: "semaines pour épuiser la première série" },
    ],
    suite: "La maison prépare une quatrième composition dans le même territoire. Le récit n’a pas eu à être réécrit.",
  },
  {
    slug: "cime",
    nom: "Cime",
    ligne: "Nommer le café du matin, et l’amener en épicerie.",
    client: "Cime",
    secteur: "Café",
    annee: "2024",
    duree: "4 mois",
    role: "Offre, récit et mise en vente",
    image: "/images/cime.png",
    alt: "Tasse de café sur une table en chêne, avec des grains et un linge clair.",
    contexte:
      "Deux producteurs de la région d’Aboisso et un torréfacteur voulaient une marque commune, vendue au comptoir puis en épicerie. Le café était excellent. Le langage, lui, n’existait pas encore.",
    enjeu:
      "Faire exister Cime avant même l’ouverture, et donner aux épiceries une raison simple de le référencer. Les scores de dégustation ne suffisaient pas : les acheteurs demandaient pour quel moment de la journée.",
    promesse: "« Le café du matin, sans détour. »",
    tenue:
      "Marc a nommé l’offre, écrit le récit et conçu la fiche d’une page qui sert aux épiceries. Il a aussi fixé l’ordre : le comptoir d’abord, pour qu’il y ait un lieu à raconter, les épiceries ensuite.",
    phases: [
      {
        numero: "01",
        titre: "Terrain",
        texte:
          "Visite des deux fermes, une journée de torréfaction, entretiens avec trois épiciers qui refusaient les nouvelles marques. Leurs objections sont devenues le sommaire de la fiche de vente.",
      },
      {
        numero: "02",
        titre: "Offre",
        texte:
          "Trois références seulement, nommées par l’usage : Matin, Table, Après-midi. Pas de gamme qui s’allonge, pas de score imprimé sur le sachet. Chaque nom devait tenir en une phrase.",
      },
      {
        numero: "03",
        titre: "Promesse",
        texte:
          "Une phrase pour la vitrine, la fiche et les réseaux : le café du matin, sans détour. Elle écarte le jargon et laisse la place au produit, au lieu de le recouvrir.",
      },
      {
        numero: "04",
        titre: "Identité",
        texte:
          "Travail avec Awa N’Guessan sur une identité tenue : le nom, la couleur du sachet, la typographie du comptoir. Marc a cadré ce qu’il fallait dire. La forme a suivi, sans ajouter de slogan.",
      },
      {
        numero: "05",
        titre: "Ouverture",
        texte:
          "Le comptoir ouvre en premier. Deux semaines de service pour entendre les questions réelles, puis envoi aux épiceries d’une fiche d’une page : usage, grammage, prix, et rien d’autre.",
      },
      {
        numero: "06",
        titre: "Ajustement",
        texte:
          "Les questions en caisse portaient sur le grammage, pas sur les noms. La fiche a été réécrite en une phrase par référence. Les trois noms sont restés. Aucune référence n’a été retirée.",
      },
    ],
    equipe: [
      { nom: "Marc Adou", role: "Offre, récit, outils de vente" },
      { nom: "Awa N’Guessan", role: "Identité visuelle" },
      { nom: "Yao Kouassi", role: "Torréfaction et relecture produit" },
      { nom: "Thomas Leclerc", role: "Photographie" },
      { nom: "Les deux producteurs", role: "Origine et relecture des preuves" },
    ],
    resultats: [
      { valeur: "14", detail: "épiceries référencées en trois mois" },
      { valeur: "3", detail: "références, toujours au catalogue" },
      { valeur: "2e", detail: "semaine : le comptoir a déjà sa file" },
    ],
    suite: "Une quatrième référence est à l’étude. Elle n’entrera au catalogue que si elle a un usage distinct des trois premières.",
  },
  {
    slug: "atelier-k",
    nom: "Atelier K",
    ligne: "Être choisi pour les bons chantiers.",
    client: "Atelier K",
    secteur: "Architecture",
    annee: "2025",
    duree: "3 mois",
    role: "Positionnement et génération de mandats",
    image: "/images/atelier.png",
    alt: "Chaise en chêne dans une pièce aux murs de plâtre, traversée par la lumière.",
    contexte:
      "Atelier K réalise des intérieurs à Abidjan. Le studio avait plus de demandes que de chantiers justes : beaucoup de messages, peu de mandats au bon budget. Le fondateur passait ses semaines en rendez-vous qui n’aboutissaient pas.",
    enjeu:
      "Être choisi par des clients privés qui ont un vrai chantier, et cesser de répondre à tout. Le travail n’était pas de publier davantage. Il était de rendre le studio lisible, y compris dans ce qu’il refuse.",
    promesse: "« Moins de visites. De meilleurs chantiers. »",
    tenue:
      "Marc a relu les mandats passés, posé le seuil et réécrit le dossier de présentation. Il a mis en place les trois questions qui filtrent les rendez-vous, et le rythme : un chantier raconté par mois, pas un flux.",
    phases: [
      {
        numero: "01",
        titre: "Relecture",
        texte:
          "Les vingt derniers échanges : lesquels ont donné un chantier heureux, lesquels ont coûté du temps sans suite. Le motif était net. Les projets flous sur la surface et le calendrier n’aboutissaient pas.",
      },
      {
        numero: "02",
        titre: "Seuil",
        texte:
          "Appartements et maisons. Pas les bureaux. Une surface minimale, écrite noir sur blanc. Le refus est devenu une phrase du dossier, pas une gêne en fin de rendez-vous.",
      },
      {
        numero: "03",
        titre: "Dossier",
        texte:
          "Douze pages. Un projet par double page. Le budget est indiqué, pas suggéré. Les photos existantes ont été réordonnées. Rien n’a été reshooté pour cette phase : le récit suffisait.",
      },
      {
        numero: "04",
        titre: "Présence",
        texte:
          "Un récit par mois, celui d’un chantier en cours. Fin du flux quotidien, qui attirait des demandes hors sujet. Chaque publication renvoie au dossier, pas à une prise de contact directe.",
      },
      {
        numero: "05",
        titre: "Qualification",
        texte:
          "Trois questions avant tout rendez-vous : le lieu, la surface, l’horizon du chantier. Si l’une manque, le rendez-vous n’a pas lieu. Le fondateur a tenu ce cadre sans exception les six premières semaines.",
      },
      {
        numero: "06",
        titre: "Lecture",
        texte:
          "Au bout du trimestre, les mandats signés venaient du dossier, pas des messages spontanés. Le nombre de rendez-vous a baissé. Le budget moyen des chantiers a monté.",
      },
    ],
    equipe: [
      { nom: "Marc Adou", role: "Positionnement, dossier, qualification" },
      { nom: "Koffi Assamoi", role: "Fondateur, relecture" },
      { nom: "Mireille Costa", role: "Mise en page du dossier" },
      { nom: "Samuel Yao", role: "Photographies de chantiers" },
    ],
    resultats: [
      { valeur: "4", detail: "mandats signés au premier trimestre" },
      { valeur: "Double", detail: "budget moyen des chantiers" },
      { valeur: "11", detail: "rendez-vous, contre une trentaine avant" },
    ],
    suite: "Le dossier sert maintenant de seuil. Les projets hors positionnement ne vont plus jusqu’au rendez-vous.",
  },
  {
    slug: "nimba",
    nom: "Nimba",
    ligne: "Une phrase, la même, du produit à la campagne.",
    client: "Nimba",
    secteur: "Paiement",
    annee: "2024",
    duree: "6 mois",
    role: "Stratégie, récit et acquisition",
    image: "/images/nimba.png",
    alt: "Carnet fermé, téléphone et stylo sur une pierre claire.",
    contexte:
      "Nimba permet aux commerçants d’encaisser et de recevoir l’argent de la journée. L’équipe produit avait des utilisateurs, pas une phrase. L’acquisition coûtait cher, et le discours changeait d’une annonce à l’autre.",
    enjeu:
      "Dire une seule chose, la même dans le produit, les annonces et la bouche des commerciaux. Puis juger la campagne sur les comptes encore actifs, pas sur les clics.",
    promesse: "« L’argent de la journée, le soir même. »",
    tenue:
      "Marc a trouvé la phrase, briefé la campagne et aligné le produit, le média et le discours commercial. Le suivi s’est fait chaque lundi, sur un seul chiffre : le coût d’un compte encore ouvert trente jours plus tard.",
    phases: [
      {
        numero: "01",
        titre: "Écoute",
        texte:
          "Quinze commerçants, au Plateau et à Yopougon, pendant le service. La question était simple : à quel moment de la journée l’application devient utile. La réponse tournait toujours autour de l’heure de l’encaissement.",
      },
      {
        numero: "02",
        titre: "Constat",
        texte:
          "Les publicités parlaient d’une solution de paiement. Les commerçants parlaient de l’heure à laquelle l’argent arrive. Le coût d’acquisition était lu en clics. Les comptes abandonnés au bout d’une semaine ne comptaient pas.",
      },
      {
        numero: "03",
        titre: "Phrase",
        texte:
          "Une promesse, assez concrète pour être vérifiée le soir même. Elle a été testée à voix haute avec quatre commerçants et avec l’équipe commerciale. Ce qui ne pouvait pas se dire au comptoir a été écarté.",
      },
      {
        numero: "04",
        titre: "Campagne",
        texte:
          "Trois annonces, pas vingt. Chacune montre un commerçant, un quartier, un horaire. Studio Rama a tourné sur place. Marc a tenu le brief, les textes, et le refus des variantes hors sujet.",
      },
      {
        numero: "05",
        titre: "Parcours",
        texte:
          "De l’annonce à l’ouverture de compte, réécrit avec l’équipe produit. Les écrans qui répétaient la phrase ont été gardés. Les écrans qui en ajoutaient une autre ont été retirés.",
      },
      {
        numero: "06",
        titre: "Pilotage",
        texte:
          "Point chaque lundi. Un seul indicateur : le coût d’un compte encore actif à trente jours. Les annonces qui n’illustraient pas la phrase ont été arrêtées, même lorsqu’elles rapportaient des clics.",
      },
    ],
    equipe: [
      { nom: "Marc Adou", role: "Stratégie, récit, brief média" },
      { nom: "Nadia Touré", role: "Produit" },
      { nom: "Julien Aka", role: "Média et mesure" },
      { nom: "Studio Rama", role: "Création de la campagne" },
      {
        nom: "Quatre commerçants",
        role: "Témoignages, Plateau et Yopougon",
      },
    ],
    resultats: [
      { valeur: "32 %", detail: "de coût en moins sur un compte actif à 30 jours" },
      { valeur: "3", detail: "annonces, à la place d’une vingtaine" },
      { valeur: "8", detail: "semaines pour stabiliser le message" },
    ],
    suite: "La phrase est devenue le filtre des nouvelles annonces. Ce qui ne peut pas l’illustrer ne part pas.",
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
