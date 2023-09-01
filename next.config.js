/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.gft.com',
        port: '',
        pathname: ''
      },
      {
        protocol: 'https',
        hostname: 'orgsystem.com.br/favicon-32x32.png',
        port: '',
        pathname: ''
      },
      {
        protocol: 'http',
        hostname: 'engdigital.com.br',
        port: '',
        pathname: '/wp-content/uploads/2021/03/engdigital.png'
      }
    ]
  }
}

module.exports = nextConfig
