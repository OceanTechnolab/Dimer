/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: 'export',
  trailingSlash: true, 
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
