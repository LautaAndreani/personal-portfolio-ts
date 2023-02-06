/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        has: [
          {
            type: 'host',
            value: 'cv.lautaroandreani.com',
          },
        ],
        permanent: true,
        destination: '/resume.pdf',
      },
    ]
  }
}

module.exports = nextConfig
