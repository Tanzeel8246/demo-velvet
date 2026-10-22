import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pure static export — upload the generated `out/` folder CONTENTS
  // to the subdomain docroot (velvet.codehubb.com). No Node server.
  output: "export",
  // Root deployment on the subdomain: no basePath.
  // Emit /shop/index.html style files so every route works on plain hosts.
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
