/*
═══════════════════════════════════════════════════════
🜂  Made by Sebastian Mazza  |  Crafted in 10 days in 2025
For my good friend — crafted with precision & soul.
═══════════════════════════════════════════════════════
*/

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  transpilePackages: [],
  images: {
    // schlanke Stufen, damit Mobile nicht unnötig große Renditions bekommt
    deviceSizes: [320, 420, 640, 750, 828, 1080],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    formats: ['image/avif', 'image/webp'],
    // sichert absolute Pfade ab (du lieferst lokal aus)
    remotePatterns: [],
    dangerouslyAllowSVG: false,
  },
  experimental: {
    esmExternals: true,
    // reduziert Transform/Polyfill-Last in modernen Browsern
    forceSwcTransforms: true,
  },
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

