import type { Metadata } from "next";
import Script from "next/script";
import type { ReactNode } from "react";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LayoutWrapper } from "@/components/LayoutWrapper";
import LightboxGlobal from "@/components/LightboxGlobal";

export const metadata: Metadata = {
  title: "Blood Diamond Ink",
  description:
    "Tattoo Studios für Realistic, Fineline und Cover-Up Artworks in Pforzheim, Heilbronn und Böblingen."
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
        {/* Globale Lightbox für alle Bilder außerhalb HERO & Team-Galerien */}
        <LightboxGlobal scopeSelector="main" excludeSelector="#hero, #team-gallery, [data-no-lightbox]" />
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

        {/* Klaro laden */}
        <Script src="/klaro/klaro.min.js" strategy="afterInteractive" />
        <Script src="/klaro/klaro.config.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
