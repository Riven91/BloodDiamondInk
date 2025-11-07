/*
═══════════════════════════════════════════════════════
🜂  Made by Sebastian Mazza  |  Crafted in 10 days in 2025
For my good friend — crafted with precision & soul.
═══════════════════════════════════════════════════════
*/

const nextConfig = {
  experimental: { esmExternals: true },
  swcMinify: true,
  output: 'standalone',
  transpilePackages: [],
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

export default nextConfig;
