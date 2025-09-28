/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vehicle-images.dealerinspire.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cars.usnews.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.autocar.co.uk",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "platform.cstatic-images.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cache.bmwusa.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "stimg.cardekho.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.edmunds.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "toyotasialkot.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "zffautomotive.ie",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "di-uploads-pod11.dealerinspire.com",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
