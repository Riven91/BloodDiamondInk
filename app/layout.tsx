import type { Metadata } from "next";
import Script from "next/script";
import type { ReactNode } from "react";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LayoutWrapper } from "@/components/LayoutWrapper";
import { SITE_URL } from "./lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Blood Diamond Tattoo Ink.",
    template: "%s | Blood Diamond Tattoo Ink."
  },
  description:
    "Tattoo Kunst in Baden-Württemberg – Fineline, Realistic & Cover-Up auf Weltklasse-Niveau. Nur mit Termin.",
  icons: {
    icon: [{ url: "/logo-blooddiamond.svg", type: "image/svg+xml" }]
  },
  alternates: { canonical: "/" },
  openGraph: {
    title: "Blood Diamond Tattoo Ink.",
    description:
      "Tattoo Kunst in Baden-Württemberg – Fineline, Realistic & Cover-Up auf Weltklasse-Niveau. Nur mit Termin.",
    url: SITE_URL,
    siteName: "Blood Diamond Tattoo Ink.",
    images: [
      {
        url: `${SITE_URL}/social_media_pre_cropped.png`,
        width: 1200,
        height: 630,
        alt: "Blood Diamond Tattoo Ink. – Social Preview"
      }
    ],
    locale: "de_DE",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Blood Diamond Tattoo Ink.",
    description:
      "Tattoo Kunst auf höchstem Niveau – Pforzheim • Böblingen • Heilbronn",
    images: [`${SITE_URL}/social_media_pre_cropped.png`]
  }
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {

  return (
    <html lang="de">
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
        <div
          className="fixed inset-0 z-[-1] opacity-5"
          style={{
            backgroundImage: "url('/Herobackground2_v5.png')",
            backgroundSize: '40%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
          }}
        />
        <Header />
        <LayoutWrapper>
          <main className="bg-transparent">{children}</main>
        </LayoutWrapper>
        <Footer />

        {/* Consent-Defaults: keine optionalen Dienste ohne Opt-in */}
        <Script id="consent-defaults" strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        // Wir nutzen keine Analytics/Ads – Defaults auf denied.
        gtag('consent','default', {
          ad_user_data: 'denied',
          ad_personalization: 'denied',
          ad_storage: 'denied',
          analytics_storage: 'denied'
        });`}
        </Script>

        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-11CKJZCNPL"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            // Analytics startet erst nach Klaro-Opt-in
            let __gaConfigured = false;
            window.addEventListener('consent:ga', (e) => {
              if (e?.detail && !__gaConfigured) {
                gtag('config', 'G-11CKJZCNPL', { anonymize_ip: true });
                __gaConfigured = true;
              }
            });
          `}
        </Script>

        {/* Klaro laden */}
        <Script src="/klaro/klaro.min.js" strategy="afterInteractive" />
        <Script src="/klaro/klaro.config.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
