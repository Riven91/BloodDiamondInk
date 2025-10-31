import type { Metadata } from "next";
import Script from "next/script";
import type { ReactNode } from "react";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LayoutWrapper } from "@/components/LayoutWrapper";
import { GtmConsentLoader } from "@/components/GtmConsentLoader";
import { metadataBase } from "./config/site";

export const metadata: Metadata = {
  metadataBase,
  title: "Tattoo Studios in Baden-Württemberg",
  description:
    "Blood Diamond Ink. vereint Realistic, Fineline und Cover-Up Artists in Pforzheim, Heilbronn und Böblingen.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    url: "/",
    title: "Blood Diamond Tattooing – Tattoo-Kunst in Baden-Württemberg",
    description: "Internationale Artists, preisgekrönte Designs und kompromisslose Hygiene.",
    images: [
      {
        url: "/social_media_pre_cropped.png",
        width: 1200,
        height: 630,
        alt: "Blood Diamond Tattoo – Social Preview",
      },
    ],
    siteName: "Blood Diamond Tattoo Ink.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blood Diamond Tattooing – Tattoo-Kunst in Baden-Württemberg",
    description: "Internationale Artists, preisgekrönte Designs und kompromisslose Hygiene.",
    images: ["/social_media_pre_cropped.png"],
  },
};

const isGtmEnabled = process.env.NEXT_PUBLIC_ENABLE_GTM === "true";
const isGa4Enabled = process.env.NEXT_PUBLIC_ENABLE_GA4 === "true";
const ga4Id = process.env.NEXT_PUBLIC_GA4_ID;
const shouldRenderConsentLoader = isGtmEnabled || (isGa4Enabled && !!ga4Id);

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="de">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Hard Fallbacks – stellen Favicons unabhängig von Metadata sicher */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
      </head>
      <body className="bg-blooddiamond-background text-blooddiamond-text antialiased font-body font-sans">
        {/* SW-NUKE-INJECT: temporär, löscht Service Worker & Caches beim Laden */}
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
        {/* Dev-Overlay entfernt – Desktop-Hero liegt nun via CSS-Hintergrund an. */}
        <Header />
        <LayoutWrapper>
          <main className="bg-transparent">{children}</main>
        </LayoutWrapper>
        <Footer />

        {/* GTM lädt nur nach Consent + Idle. Für schnelle Tests kann via NEXT_PUBLIC_ENABLE_GTM=false global deaktiviert werden. */}
        {shouldRenderConsentLoader && <GtmConsentLoader />}

        {/* Klaro laden */}
        <Script src="/klaro/klaro.min.js" strategy="afterInteractive" />
        <Script src="/klaro/klaro.config.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
