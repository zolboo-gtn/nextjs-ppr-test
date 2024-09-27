/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    after: true,
    ppr: "incremental",
  },
};

export default nextConfig;
