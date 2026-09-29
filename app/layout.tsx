import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import { BoutonRemonter } from "@/components/bouton-remonter";
import { Entete } from "@/components/entete";
import { FiletLecture } from "@/components/filet-lecture";
import { Ouverture } from "@/components/ouverture";
import { Pied } from "@/components/pied";
import { profil } from "@/lib/contenu";
import "./globals.css";

const serif = Source_Serif_4({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-source-serif",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${profil.nom} — ${profil.role}`,
    template: `%s — ${profil.nom}`,
  },
  description:
    `${profil.nom}, product designer UX/UI. Parcours, projets fintech et contact.`,
};

export const viewport = {
  themeColor: "#111113",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover" as const,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      data-scroll-behavior="smooth"
      className={`${serif.variable} ${sans.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="flex min-h-full flex-col bg-papier font-sans text-encre">
        <Ouverture />
        <FiletLecture />
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-papier focus:px-4 focus:py-2"
        >
          Aller au contenu
        </a>
        <Entete />
        <main id="contenu" tabIndex={-1} className="flex-1">
          {children}
        </main>
        <Pied />
        <BoutonRemonter />
      </body>
    </html>
  );
}
