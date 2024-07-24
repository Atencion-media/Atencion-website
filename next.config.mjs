/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "asset.cloudinary.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "www.citypng.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "p7.hiclipart.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "i.pinimg.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
