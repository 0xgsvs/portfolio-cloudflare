import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://0xgsvs.dev",
  integrations: [sitemap({ filter: (page) => !page.includes("/secret") })],
  devOptions: {
    host: "0.0.0.0",
  },
});
