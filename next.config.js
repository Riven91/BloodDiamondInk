
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
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
