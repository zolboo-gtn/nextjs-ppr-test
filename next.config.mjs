/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    after: true,
    ppr: "incremental",
    reactCompiler: true,
  },
};

export default nextConfig;
