import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import { BoutonRemonter } from "@/components/bouton-remonter";
import { Entete } from "@/components/entete";
import { FiletLecture } from "@/components/filet-lecture";
import { Ouverture } from "@/components/ouverture";
import { Pied } from "@/components/pied";
import { profil } from "@/lib/contenu";
import "./globals.css";

const serif = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const sans = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${profil.nom} — ${profil.role}`,
    template: `%s — ${profil.nom}`,
  },
  description:
    "Marc Adou, marketing digital à Abidjan. Parcours, missions et contact.",
};

export const viewport = {
  themeColor: "#f4f1eb",
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
