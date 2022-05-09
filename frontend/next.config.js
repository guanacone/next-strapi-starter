/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    loader: 'default',
    domains: ['localhost'],
  },
  i18n: {
    locales: ['en', 'es-NI'],
    defaultLocale: 'en',
  },
}

module.exports = nextConfig
