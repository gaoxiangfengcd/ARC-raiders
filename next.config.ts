import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  outputFileTracingRoot: process.cwd(),
  async redirects() {
    return [
      {
        source: "/trials/stiletto-damage",
        destination: "/trials/damage-arc-enemies-using-a-stiletto",
        permanent: false,
      },
      {
        source: "/trials/light-impact-flying",
        destination: "/trials/damage-flying-arc-enemies-using-light-impact-grenade",
        permanent: false,
      },
      {
        source: "/trials/frozen-raider-caches",
        destination: "/trials/search-frozen-raider-caches",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
