import type { Metadata } from "next";
import Script from "next/script";
import type { ReactNode } from "react";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LayoutWrapper } from "@/components/LayoutWrapper";
import { GtmConsentLoader } from "@/components/GtmConsentLoader";
import { metadataBase } from "./config/site";
import { loadGA4, whenIdle } from "../src/lib/ga4";

export const metadata: Metadata = {
  metadataBase,
  title: "Tattoo Studios in Baden-Württemberg",
  description:
    "Blood Diamond Ink. vereint Realistic, Fineline und Cover-Up Artists in Pforzheim, Heilbronn und Böblingen.",
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

const ga4InitScript =
  isGa4Enabled && ga4Id
    ? `${loadGA4.toString()}
${whenIdle.toString()}
(function () {
  var ga4Id = ${JSON.stringify(ga4Id)};

  try {
    if (window.localStorage && window.localStorage.getItem('consent') === 'granted') {
      whenIdle(function () { loadGA4(ga4Id); });
    }
  } catch (error) {
    // Access to localStorage can fail in some environments
  }

  window.addEventListener('consent:granted', function () {
    whenIdle(function () { loadGA4(ga4Id); });
  }, { once: true });

  window.addEventListener('consent:ga', function (event) {
    if (event && event.detail) {
      window.dispatchEvent(new Event('consent:granted'));
    }
  });
})();
`
    : null;

export default function RootLayout({
  children,
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
        {/* Dev-Overlay entfernt – Desktop-Hero liegt nun via CSS-Hintergrund an. */}
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

        {/* Google Analytics 4 - lazy & consent-gated */}
        {ga4InitScript && (
          <Script id="ga4-consent-loader" strategy="afterInteractive">
            {ga4InitScript}
          </Script>
        )}

        {/* GTM lädt nur nach Consent + Idle. Für schnelle Tests kann via NEXT_PUBLIC_ENABLE_GTM=false global deaktiviert werden. */}
        {isGtmEnabled && <GtmConsentLoader />}

        {/* Klaro laden */}
        <Script src="/klaro/klaro.min.js" strategy="afterInteractive" />
        <Script src="/klaro/klaro.config.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
