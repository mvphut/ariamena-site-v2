import type { NextConfig } from "next";

// Set NEXT_PUBLIC_BASE_PATH (e.g. "/ariamena-site") when hosting under a sub-path such as GitHub Pages.
// Leave it unset for the root domain deploy (ariamena.com).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: false,
  images: { unoptimized: true },
  reactStrictMode: true,
  agentRules: false,
};

export default nextConfig;
