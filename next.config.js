/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    unoptimized: false,
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  async redirects() {
    return [
      { source: "/crear-pagina-web-honduras", destination: "/paginas-web", permanent: true },
      { source: "/nexus-honduras", destination: "/nosotros", permanent: true },
      { source: "/ecommerce", destination: "/paginas-web", permanent: true },
      { source: "/dashboard", destination: "/crm", permanent: true },
      { source: "/mivisita", destination: "/clientes", permanent: true },
      { source: "/miporton", destination: "/clientes", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
}

module.exports = nextConfig


