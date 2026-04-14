import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
      { protocol: "https", hostname: "cdn.worldvectorlogo.com" },
      { protocol: "https", hostname: "raw.githubusercontent.com" },
      { protocol: "https", hostname: "www.gocuotas.com" },
      { protocol: "https", hostname: "www.rapipago.com.ar" },
      { protocol: "https", hostname: "www.e-pagofacil.com.ar" },
      { protocol: "https", hostname: "logospng.org" },
    ],
  },
};

export default nextConfig;
