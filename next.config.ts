/** @type {import('next').NextConfig} */
const nextConfig = {
  // Tambahkan baris ini untuk mengatasi error 502 di Netlify:
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
