
/*
═══════════════════════════════════════════════════════
🜂  Made by Sebastian Mazza  |  Crafted in 10 days in 2025
For my good friend — crafted with precision & soul.
═══════════════════════════════════════════════════════
*/
/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/impressum/oetisheim',
        destination: '/impressum',
        permanent: true,
      },
      {
        source: '/datenschutz/oetisheim',
        destination: '/datenschutz',
        permanent: true,
      },
      {
        source: '/agb/oetisheim',
        destination: '/agb',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "img-src 'self' data: https: https://maps.gstatic.com",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https: https://maps.googleapis.com https://maps.gstatic.com https://www.google.com",
              "style-src 'self' 'unsafe-inline' https: https://fonts.googleapis.com",
              "font-src 'self' data: https: https://fonts.gstatic.com",
              "frame-src 'self' https://www.google.com https://www.google.com/maps",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
            ].join('; '),
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
