
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
};

module.exports = nextConfig;
