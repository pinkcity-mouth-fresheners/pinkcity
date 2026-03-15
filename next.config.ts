import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // /* config options here */
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.pinkcitymouthfresheners.com",
        port: "",
        pathname: "/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2678400, // 31 days, matches your origin Cache-Control
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config) => {
    config.externals.push("canvas");
    return config;
  },
};

export default nextConfig;
