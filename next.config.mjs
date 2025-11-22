/** @type {import('next').NextConfig} */

const CONTENT_SECURITY_POLICY = [
  "default-src 'self'",
  // Bilder: eigene Domain, data: URIs, HTTPS allgemein + Google Maps Tiles + GA
  "img-src 'self' data: https: https://maps.gstatic.com https://www.google-analytics.com https://stats.g.doubleclick.net",
  // Skripte: eigene Domain, inline/eval erlaubt, alle https-Skripte + Google Maps + Google + GTM
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https: https://maps.googleapis.com https://maps.gstatic.com https://www.google.com https://www.googletagmanager.com",
  // Styles: eigene Domain, inline + Google Fonts CSS
  "style-src 'self' 'unsafe-inline' https: https://fonts.googleapis.com",
  // Fonts: eigene Domain, data: und Google Fonts
  "font-src 'self' data: https: https://fonts.gstatic.com",
  // Frames: Google / Google Maps erlauben
  "frame-src 'self' https://www.google.com https://www.google.com/maps",
  // GA4: Netzwerkverbindungen explizit freigeben
  "connect-src 'self' https://region1.google-analytics.com https://www.google-analytics.com https://www.googletagmanager.com https://stats.g.doubleclick.net",
  // Restliche Absicherung wie vorher
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
].join("; ");

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: CONTENT_SECURITY_POLICY,
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const redirects = [
  { source: "/impressum/oetisheim", destination: "/impressum", permanent: true },
  { source: "/datenschutz/oetisheim", destination: "/datenschutz", permanent: true },
  { source: "/agb/oetisheim", destination: "/agb", permanent: true },
  { source: "/kontakt", destination: "/", permanent: true },
  { source: "/contact", destination: "/", permanent: true },
];

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_FUNNEL_HEILBRONN: process.env.NEXT_PUBLIC_FUNNEL_HEILBRONN,
    NEXT_PUBLIC_FUNNEL_PFORZHEIM: process.env.NEXT_PUBLIC_FUNNEL_PFORZHEIM,
    NEXT_PUBLIC_FUNNEL_BOEBLINGEN: process.env.NEXT_PUBLIC_FUNNEL_BOEBLINGEN,
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return redirects;
  },
};

export default nextConfig;
