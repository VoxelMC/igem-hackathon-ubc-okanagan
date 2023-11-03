import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  trailingSlash: "ignore",
  outDir: "public",
  publicDir: "static",
  integrations: [tailwind()]
});