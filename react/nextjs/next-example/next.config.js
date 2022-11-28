/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true, // RUST JS compiler
  images: {
    domains: ["raw.githubusercontent.com",'res.cloudinary.com']
  },
};

module.exports = nextConfig;
