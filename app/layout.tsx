import type { Metadata } from "next";
import Script from "next/script";
import type { ReactNode } from "react";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LayoutWrapper } from "@/components/LayoutWrapper";
import { GtmConsentLoader } from "@/components/GtmConsentLoader";
import { loadGA4, whenIdle } from "../src/lib/ga4";
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
const openGraphImageType = "image/png";
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
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/manifest.webmanifest",
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
        <meta property="fb:app_id" content={FB_APP_ID} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Open Graph required */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={defaultTitle} />
        <meta property="og:description" content={defaultDescription} />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:url" content={canonicalUrl} />

        {/* Open Graph image (explicit) */}
        <meta property="og:image" content={socialPreviewImage} />
        <meta property="og:image:secure_url" content={socialPreviewImage} />
        <meta property="og:image:type" content={openGraphImageType} />
        <meta property="og:image:width" content={openGraphImageWidth.toString()} />
        <meta property="og:image:height" content={openGraphImageHeight.toString()} />
        <meta property="og:image:alt" content={openGraphImageAlt} />

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
