/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['rickandmortyapi.com'],
    loader: 'default'
  }
}

module.exports = nextConfig
