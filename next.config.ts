import type { NextConfig } from "next";
const nextConfig: NextConfig = { output: "export", basePath: "/baeckereimuenchen", trailingSlash: true, images: { unoptimized: true } };
export default nextConfig;
