import type { NextConfig } from "next"

const nextConfig: NextConfig = {
    experimental: {
        turbo: {
            rules: { "*.svg": { loaders: ["@svgr/webpack"], as: "*.js" } },
        },
        reactCompiler: true,
    },

    images: { remotePatterns: [{ protocol: "https", hostname: "**" }] },

    poweredByHeader: false,
    reactStrictMode: true,
    devIndicators: false,
}

export default nextConfig
