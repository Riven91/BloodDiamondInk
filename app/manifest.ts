import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Blood Diamond Tattoo Ink.",
    short_name: "Blood Diamond",
    start_url: "/",
    scope: "/",
    id: "/",
    description:
      "Tattoo Studios in Baden-Württemberg – Realistic, Fineline, Cover-Up, Black & Grey, Mandala, New School.",
    display: "standalone",
    dir: "ltr",
    lang: "de-DE",
    background_color: "#0a0a0b",
    theme_color: "#0a0a0b",
    icons: [
      {
        src: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png"
      },
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png"
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png"
      },
      {
        src: "/maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable"
      }
    ],
    shortcuts: [
      {
        name: "Studios",
        url: "/standorte",
        description: "Standorte in Pforzheim, Heilbronn, Böblingen"
      }
    ],
    categories: ["art", "tattoo", "lifestyle"],
    prefer_related_applications: false
  };
}
