import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  trailingSlash: "ignore",
  outDir: "public",
  publicDir: "static",
  integrations: [tailwind()],
  output: "server",
  adapter: vercel()
});