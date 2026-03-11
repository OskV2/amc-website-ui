import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  // Zamień na swoją domenę
  site: "https://amczg.pl",
  output: "static",
  integrations: [
    react(),
    tailwind(),
    sitemap(),
  ],
});
