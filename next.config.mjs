/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    deviceSizes: [320, 420, 768, 1024, 1200],
    imageSizes: [16, 32, 48, 64, 96]
  },
  env: {
    NEXT_PUBLIC_FUNNEL_HEILBRONN: process.env.NEXT_PUBLIC_FUNNEL_HEILBRONN,
    NEXT_PUBLIC_FUNNEL_PFORZHEIM: process.env.NEXT_PUBLIC_FUNNEL_PFORZHEIM,
    NEXT_PUBLIC_FUNNEL_BOEBLINGEN: process.env.NEXT_PUBLIC_FUNNEL_BOEBLINGEN
  },
  async redirects() {
    return [
      { source: "/kontakt", destination: "/", permanent: true },
      { source: "/contact", destination: "/", permanent: true }
    ];
  }
};

export default nextConfig;
