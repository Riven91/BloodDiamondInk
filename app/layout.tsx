import type { Metadata } from "next";
import Script from "next/script";
import type { ReactNode } from "react";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LayoutWrapper } from "@/components/LayoutWrapper";
import { GtmConsentLoader } from "@/components/GtmConsentLoader";
import WinterOverlay from "@/components/WinterOverlay";
import {
  socialPreviewImage,
  SITE_NAME,
  defaultTitle,
  defaultDescription,
  metadataBase as siteMetadataBase,
  FB_APP_ID,
} from "./config/site";

const metadataBase = siteMetadataBase;
const canonicalUrl = new URL("/", metadataBase).toString();
const openGraphImageAlt = "Blood Diamond Tattoo Ink – Social Preview";
const openGraphImageType = "image/jpeg";
const openGraphImageWidth = 1200;
const openGraphImageHeight = 630;

export const metadata: Metadata = {
  metadataBase,
  alternates: { canonical: canonicalUrl },
  title: { default: defaultTitle, template: "%s | Blood Diamond Tattoo" },
  description: defaultDescription,
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: defaultTitle,
    description: defaultDescription,
    url: canonicalUrl,
    images: [
      {
        url: socialPreviewImage,
        secureUrl: socialPreviewImage,
        type: openGraphImageType,
        width: openGraphImageWidth,
        height: openGraphImageHeight,
        alt: openGraphImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [socialPreviewImage],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/manifest.webmanifest",
};

const isGtmEnabled = process.env.NEXT_PUBLIC_ENABLE_GTM === "true";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="de">
      <head>
        {/* SINGLE SOURCE OG image: DO NOT CHANGE */}
        <meta
          property="og:image"
          content="https://blooddiamond-tattoo.de/social_media_pre_cropped.jpg"
        />
        <meta
          property="og:image:secure_url"
          content="https://blooddiamond-tattoo.de/social_media_pre_cropped.jpg"
        />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Blood Diamond Tattoo Ink – Social Preview"
        />
        <meta property="fb:app_id" content={FB_APP_ID} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Open Graph required */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={defaultTitle} />
        <meta property="og:description" content={defaultDescription} />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:url" content={canonicalUrl} />

        {/* Open Graph image (explicit) */}

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={defaultTitle} />
        <meta
          name="twitter:description"
          content={defaultDescription}
        />
        <meta name="twitter:image" content={socialPreviewImage} />
        {/* Hard Fallbacks – stellen Favicons unabhängig von Metadata sicher */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
      </head>
      <body className="bg-blooddiamond-background text-blooddiamond-text antialiased font-body font-sans">
        {/* Hinweis: Debug-Nuker entfernt, damit Browser-Caching & SW wieder normal funktionieren */}
        {/* Dev-Overlay entfernt – Desktop-Hero liegt nun via CSS-Hintergrund an. */}
        <WinterOverlay />
        <Header />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-M9M67M5KNB"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
           gtag('consent', 'default', {
             ad_storage: 'denied',
             analytics_storage: 'denied'
           });
           gtag('config', 'G-M9M67M5KNB', {
             anonymize_ip: true
           });
           window.updateGaConsent = function(allowed) {
             if (allowed) {
               gtag('consent', 'update', {
                 ad_storage: 'granted',
                 analytics_storage: 'granted'
               });
             } else {
               gtag('consent', 'update', {
                 ad_storage: 'denied',
                 analytics_storage: 'denied'
               });
             }
           };
         `}
        </Script>
        <LayoutWrapper>
          <main className="bg-transparent">{children}</main>
        </LayoutWrapper>
        <Footer />

        {/* GTM lädt nur nach Consent + Idle. Für schnelle Tests kann via NEXT_PUBLIC_ENABLE_GTM=false global deaktiviert werden. */}
        {isGtmEnabled && <GtmConsentLoader />}

        {/* Klaro laden */}
        <Script src="/klaro/klaro.min.js" strategy="afterInteractive" />
        <Script src="/klaro/klaro.config.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
