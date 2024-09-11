import withPWA from 'next-pwa'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // next.js config
}

const prod = process.env.NODE_ENV === 'production'
export default withPWA({
  dest: 'public',
  disable: prod ? false : true,
})(nextConfig)
