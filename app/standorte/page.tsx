import JsonLd from "@/components/JsonLd";
import type { Metadata } from "next";
import StandorteClientPage from "./StandorteClientPage";
import { ORIGIN } from "../config/site";

export const metadata: Metadata = {
  title: 'Tattoo-Studios in Baden-Württemberg – Standorte | Blood Diamond Tattoo Ink.',
  description:
    'Drei Standorte: Pforzheim, Heilbronn & Böblingen. Adresse, Öffnungszeiten und Kontakt – jetzt Termin vereinbaren.',
  alternates: {
    canonical: `${ORIGIN}/standorte`,
  },
  // images entfernt – zentrales Bild via app/layout.tsx
};

export default function StandortePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          url: "https://blooddiamond-tattoo.de/standorte",
          name: "Standorte – Blood Diamond Tattoo Ink.",
          hasPart: [
            { "@id": "https://blooddiamond-tattoo.de/pforzheim#store" },
            { "@id": "https://blooddiamond-tattoo.de/heilbronn#store" },
            { "@id": "https://blooddiamond-tattoo.de/boeblingen#store" },
          ],
        }}
      />
      <StandorteClientPage />
    </>
  );
}
