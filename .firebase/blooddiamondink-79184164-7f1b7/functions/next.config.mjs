// next.config.mjs
var nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  env: {
    NEXT_PUBLIC_FUNNEL_HEILBRONN: process.env.NEXT_PUBLIC_FUNNEL_HEILBRONN,
    NEXT_PUBLIC_FUNNEL_PFORZHEIM: process.env.NEXT_PUBLIC_FUNNEL_PFORZHEIM,
    NEXT_PUBLIC_FUNNEL_BOEBLINGEN: process.env.NEXT_PUBLIC_FUNNEL_BOEBLINGEN
  },
  async redirects() {
    return [
      { source: "/kontakt", destination: "/", permanent: true },
      { source: "/contact", destination: "/", permanent: true },
      {
        source: "/impressum/oetisheim",
        destination: "/impressum",
        permanent: true
      },
      {
        source: "/datenschutz/oetisheim",
        destination: "/datenschutz",
        permanent: true
      },
      {
        source: "/agb/oetisheim",
        destination: "/agb",
        permanent: true
      }
    ];
  }
};
var next_config_default = nextConfig;
export {
  next_config_default as default
};
