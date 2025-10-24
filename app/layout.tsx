import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LayoutWrapper } from "@/components/LayoutWrapper";

const ogImage = "/og/og-pforzheim.jpg";

export const metadata: Metadata = {
  metadataBase: new URL("https://blooddiamondink.de"),
  title: "Blood Diamond Ink",
  description:
    "Tattoo Studios für Realistic, Fineline und Cover-Up Artworks in Pforzheim, Heilbronn und Böblingen.",
  openGraph: {
    title: "Blood Diamond Ink",
    description:
      "Tattoo Studios für Realistic, Fineline und Cover-Up Artworks in Pforzheim, Heilbronn und Böblingen.",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Blood Diamond Tattoo Ink – Studios in Baden-Württemberg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blood Diamond Ink",
    description:
      "Tattoo Studios für Realistic, Fineline und Cover-Up Artworks in Pforzheim, Heilbronn und Böblingen.",
    images: [ogImage],
  },
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {

  return (
    <html lang="de">
      <body className="bg-blooddiamond-background text-blooddiamond-text antialiased font-body font-sans">
        {/* TODO: Entfernen, sobald alte Service Worker im Live-Betrieb deregistriert sind */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
      (function(){
        try{
          if('serviceWorker' in navigator){
            navigator.serviceWorker.getRegistrations().then(rs=>rs.forEach(r=>r.unregister().catch(()=>{}))).catch(()=>{});
          }
          if(window.caches && caches.keys){
            caches.keys().then(keys=>Promise.all(keys.map(k=>caches.delete(k)))).catch(()=>{});
          }
        }catch(e){}
      })();
    `,
          }}
        />
        <div
          className="fixed inset-0 z-[-1] opacity-5"
          style={{
            backgroundImage: "url('/herobackground3.webp')",
            backgroundSize: "40%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
          }}
        />
        <Header />
        <LayoutWrapper>
          <main className="bg-transparent">{children}</main>
        </LayoutWrapper>
        <Footer />
      </body>
    </html>
  );
}
