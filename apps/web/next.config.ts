import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@foerderpilot/ui", "@foerderpilot/db", "@foerderpilot/shared"],
};

export default nextConfig;
