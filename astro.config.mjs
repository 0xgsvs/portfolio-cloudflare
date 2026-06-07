import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://venkat.dev",
  integrations: [sitemap()],
  devOptions: {
    host: "0.0.0.0",
  },
});
