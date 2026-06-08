import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  serverExternalPackages: ["better-auth", "@better-auth/kysely-adapter", "kysely", "pg"],
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
    ],
  },
}

export default nextConfig
