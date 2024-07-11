/** @type {import('next').NextConfig} */
const prefix =
  process.env.NODE_ENV === 'production' ? 'https://reberry123.github.io/fresh/' : ''

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        appDir: true,
    },
    output: 'export',
    assetPrefix: prefix,
}

module.exports = nextConfig
