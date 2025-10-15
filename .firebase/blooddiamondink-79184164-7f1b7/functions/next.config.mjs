// next.config.mjs
var nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: []
  },
  env: {
    NEXT_PUBLIC_FUNNEL_HEILBRONN: process.env.NEXT_PUBLIC_FUNNEL_HEILBRONN,
    NEXT_PUBLIC_FUNNEL_PFORZHEIM: process.env.NEXT_PUBLIC_FUNNEL_PFORZHEIM,
    NEXT_PUBLIC_FUNNEL_BOEBLINGEN: process.env.NEXT_PUBLIC_FUNNEL_BOEBLINGEN
  }
};
var next_config_default = nextConfig;
export {
  next_config_default as default
};
