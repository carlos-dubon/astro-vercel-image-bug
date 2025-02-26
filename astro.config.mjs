// @ts-check
import { defineConfig } from "astro/config";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  output: "server",
  experimental: {
    responsiveImages: true,
  },
  image: {
    experimentalLayout: "responsive",
  },
  adapter: vercel({
    imageService: true,
    devImageService: "sharp",
    edgeMiddleware: true,
  }),
});
