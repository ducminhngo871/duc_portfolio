import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "substackcdn.com",
        pathname: "/image/fetch/**",
      },
      {
        protocol: "https",
        hostname: "substack-post-media.s3.amazonaws.com",
        pathname: "/public/images/**",
      },
    ],
  },
};

export default nextConfig;
