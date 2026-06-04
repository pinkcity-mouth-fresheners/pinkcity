import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // /* config options here */
  output: "export",
  images: {
    // Static export has no image server, so Next cannot resize/convert at runtime — every image is
    // served exactly as authored. `formats` and `minimumCacheTTL` were removed here (2026-06-04)
    // because they are ignored when `unoptimized` is true; image optimization must instead be done
    // at the source (we pre-encode assets to sized WebP). `remotePatterns` is kept to document the
    // media origin.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.pinkcitymouthfresheners.com",
        port: "",
        pathname: "/**",
      },
    ],
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
