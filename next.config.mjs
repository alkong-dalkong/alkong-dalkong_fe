import withPWA from 'next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // next.js config
};

export default withPWA({
  dest: 'public',
})(nextConfig);