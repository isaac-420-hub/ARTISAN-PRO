/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      // اگر دامنه‌های دیگر هم نیاز داشتی اینجا اضافه کن
    ],
  },
};

export default nextConfig;