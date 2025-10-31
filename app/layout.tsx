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

        {/* === Klaro (Cookie-Consent) – Single Source of Truth === */}
        {/* 1) Config zuerst laden (stellt window.klaroConfig bereit) */}
        <Script
          id="klaro-config"
          src="/klaro/klaro.config.js"
          strategy="beforeInteractive"
        />
        {/* 2) Klaro Runtime – muss nach der Config kommen */}
        <Script
          id="klaro-runtime"
          src="/klaro/klaro.js"
          strategy="beforeInteractive"
        />
        {/* 3) Bootstrap: Maps-iframes nur nach Consent aktivieren; GA4/GTM strikt erst nach Zustimmung.
              Wichtig: keine Doppel-Initialisierung. */}
        <Script id="klaro-bootstrap" strategy="beforeInteractive">
          {`
(function(){
  if (window.__bd_klaro_bootstrapped) return;
  window.__bd_klaro_bootstrapped = true;

  // Hilfen
  const isMapsConsent = () => {
    try{
      if (typeof window.klaro?.getConsent === 'function') return !!window.klaro.getConsent('google-maps');
      return !!window.klaro?.state?.['google-maps'];
    }catch{return false;}
  };
  const markMapsIframes = () => {
    document.querySelectorAll('iframe').forEach((f)=>{
      if(!f || f.tagName!=='IFRAME') return;
      const cand = f.getAttribute('data-src') || f.src || '';
      if(/google\\.(com|.[a-z]+)\\/maps/i.test(cand)){
        if(!f.hasAttribute('data-klaro-maps')) f.setAttribute('data-klaro-maps','1');
        if(!f.getAttribute('data-src') && f.src){
          f.setAttribute('data-src', f.src);
          f.removeAttribute('src');
        }
      }
    });
  };
  const applyMaps = () => {
    const on = isMapsConsent();
    document.querySelectorAll('iframe[data-klaro-maps="1"]').forEach((f)=>{
      if(on){
        const src = f.getAttribute('data-src');
        if(src && !f.src){
          if(!f.hasAttribute('loading')) f.setAttribute('loading','lazy');
          if(!f.hasAttribute('referrerpolicy')) f.setAttribute('referrerpolicy','strict-origin-when-cross-origin');
          f.src = src;
          f.removeAttribute('title');
          f.removeAttribute('aria-hidden');
        }
      }else{
        const keep = f.getAttribute('data-src') || f.src;
        if(keep){
          f.setAttribute('data-src', keep);
          f.removeAttribute('src');
          f.setAttribute('title','Karte blockiert – Cookie-Einwilligung erforderlich');
          f.setAttribute('aria-hidden','true');
        }
      }
    });
  };
  const deferApply = (()=>{let p=false; return ()=>{ if(p) return; p=true; requestAnimationFrame(()=>setTimeout(()=>{p=false; try{markMapsIframes();}catch{} try{applyMaps();}catch{}},100)); };})();

  // Einmal initial (nach DOM)
  const init = ()=>{ try{markMapsIframes();}catch{} deferApply(); };
  if (document.readyState==='loading'){ document.addEventListener('DOMContentLoaded', init, {once:true}); } else { init(); }

  // Beobachte DOM-Zugänge (nur wenn bereits Consent vorhanden – sonst reicht deferApply nach Consent)
  try{
    const mo = new MutationObserver((recs)=>{
      if(!isMapsConsent()) return;
      let hit=false;
      for(const r of recs){
        r.addedNodes?.forEach((n)=>{
          if(n.nodeType!==1) return;
          if(n.tagName==='IFRAME' && n.matches?.('iframe[data-klaro-maps="1"]')) hit=true;
          n.querySelectorAll?.('iframe[data-klaro-maps="1"]').forEach(()=>{hit=true;});
        });
      }
      if(hit) deferApply();
    });
    mo.observe(document.body, {childList:true, subtree:true});
  }catch{}

  // SPA-Navigation (Next.js)
  window.addEventListener('popstate', deferApply);
  try{
    const H = window.history;
    const p = H.pushState.bind(H), r = H.replaceState.bind(H);
    H.pushState = function(){ const ret = p.apply(H, arguments); deferApply(); return ret; };
    H.replaceState= function(){ const ret = r.apply(H, arguments); deferApply(); return ret; };
  }catch{}

  // Auf Klaro-Events reagieren (Banner bestätigt / Auswahl geändert)
  window.addEventListener('klaro:consent', ()=>{ deferApply(); });
})();
          `}
        </Script>

        {/* Google Analytics 4 - lazy & consent-gated */}
        {ga4InitScript && (
          <Script id="ga4-consent-loader" strategy="afterInteractive">
            {ga4InitScript}
          </Script>
        )}

        {/* GTM lädt nur nach Consent + Idle. Für schnelle Tests kann via NEXT_PUBLIC_ENABLE_GTM=false global deaktiviert werden. */}
        {isGtmEnabled && <GtmConsentLoader />}

      </body>
    </html>
  );
}
