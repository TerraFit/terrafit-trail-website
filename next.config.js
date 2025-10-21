/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,  // ← ADD THIS LINE
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lindy.nyc3.digitaloceanspaces.com',
      },
    ],
  },
};

module.exports = nextConfig;
