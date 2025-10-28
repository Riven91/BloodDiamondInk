export type GalleryItem = {
  file: string;
  alt: string;
  caption: string;
  keywords: string[];
};

export const galleryBatch1: GalleryItem[] = [
  {
    file: "blackgrey2.jpeg",
    alt: "Black & Grey Tattoo – Porträt eines älteren Mannes mit feiner Faltenstruktur und Handdetail – Blood Diamond Tattoo Ink.",
    caption:
      "Realistische Black-&-Grey-Tattoo-Arbeit mit feinen Schattierungen, nuancierten Hauttönen und ruhiger, erzählerischer Atmosphäre.",
    keywords: ["tattoo", "black & grey", "portrait", "realismus", "schattierung", "handdetail", "blood diamond tattoo ink"],
  },
  {
    file: "blackgrey3.jpeg",
    alt: "Black & Grey Tattoo – Bein-Komposition mit Frauenporträt, Fragment-Effekten und Schädel – Blood Diamond Tattoo Ink.",
    caption:
      "Großflächiges Tattoo-Leg-Piece mit dynamischen Stofffalten, gebrochener Spiegeloptik und präziser Schattierung.",
    keywords: ["tattoo", "black & grey", "leg piece", "portrait", "skull", "realistisch", "kontrast", "blood diamond tattoo ink"],
  },
  {
    file: "blackgrey4.jpeg",
    alt: "Black & Grey Tattoo – realistisches Rap-Porträt mit Rauchdetails – Blood Diamond Tattoo Ink.",
    caption:
      "Ausdrucksstarkes Black-&-Grey-Tattoo mit weicher Übergangsschattierung – Rauchdetails verleihen dem Motiv Bewegung und Tiefe.",
    keywords: ["tattoo", "black & grey", "portrait", "smoke", "realismus", "soft shading", "blood diamond tattoo ink"],
  },
  {
    file: "blackgrey5.jpeg",
    alt: "Black & Grey Tattoo – Porträt mit Zeitungsausschnitt „Get rich or die tryin’“ – Blood Diamond Tattoo Ink.",
    caption:
      "Tattoo im Realismus-Stil mit sauber gesetzten Grauabstufungen und markanten Text-Elementen im Zeitungslayout.",
    keywords: ["tattoo", "black & grey", "portrait", "text elements", "newspaper", "realismus", "blood diamond tattoo ink"],
  },
  {
    file: "blackgrey6.jpeg",
    alt: "Black & Grey Tattoo – Rap-Porträt mit N.W.A-Coverelement – Blood Diamond Tattoo Ink.",
    caption:
      "Black-&-Grey-Tattoo-Komposition mit markanten Highlights, dokumentarischer Collage und starkem Realismus-Kontrast.",
    keywords: ["tattoo", "black & grey", "portrait", "nwa", "collage", "realistisch", "blood diamond tattoo ink"],
  },
  {
    file: "coverup1.jpeg",
    alt: "Realistic Tattoo – Porträt mit Dornenkrone – Blood Diamond Tattoo Ink.",
    caption:
      "Realistic-Tattoo mit fein moduliertem Licht, plastischer Struktur und emotionaler Intensität.",
    keywords: ["tattoo", "realistic", "portrait", "dornenkrone", "black & grey", "detailarbeit", "blood diamond tattoo ink"],
  },
  {
    file: "dark1.jpeg",
    alt: "Dark Art Tattoo – großflächiger Rücken mit Vogel- und Schlangenmotiv – Blood Diamond Tattoo Ink.",
    caption:
      "Dark-Art-Tattoo mit organischen Linien, dunklen Flächen und kraftvoller, erzählerischer Gestaltung über den gesamten Rücken.",
    keywords: ["tattoo", "dark art", "back piece", "vogel", "schlange", "linework", "blood diamond tattoo ink"],
  },
  {
    file: "fineline2.jpeg",
    alt: "Fineline Tattoo – sternumnahes Lotus-Motiv mit Dotwork-Akzenten – Blood Diamond Tattoo Ink.",
    caption:
      "Fineline-Tattoo mit zarter Linienführung, minimalistischer Geometrie und präzisen Dotwork-Akzenten.",
    keywords: ["tattoo", "fineline", "sternum", "lotus", "dotwork", "minimalistisch", "blood diamond tattoo ink"],
  },
  {
    file: "fineline3.jpeg",
    alt: "Fineline Tattoo – florales Hüft- und Oberschenkel-Ornament mit Flügel-Detail – Blood Diamond Tattoo Ink.",
    caption:
      "Fineline-Tattoo-Ornament mit fließender Linienführung und sanfter Schattierung – feminin und elegant.",
    keywords: ["tattoo", "fineline", "floral", "side piece", "wing detail", "linework", "blood diamond tattoo ink"],
  },
  {
    file: "realistic2.jpeg",
    alt: "Realistic Tattoo – Löwen-Diptychon: dynamischer Angriff und ruhiges Porträt – Blood Diamond Tattoo Ink.",
    caption:
      "Realistic-Tattoo-Diptychon mit tierischem Realismus – links kraftvolle Bewegung, rechts majestätische Ruhe.",
    keywords: ["tattoo", "realistic", "lion", "animal portrait", "black & grey", "kontrast", "blood diamond tattoo ink"],
  },
];

import { galleryData } from "./galleryData.base";

export const galleryDataAll: GalleryItem[] = [...galleryData, ...galleryBatch1];
