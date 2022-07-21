/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {domains:['upload.wikimedia.org', 'loremflickr.com']}
}

module.exports = nextConfig
