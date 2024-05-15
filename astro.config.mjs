import tailwind from "@astrojs/tailwind";
import metaTags from "astro-meta-tags";
import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), metaTags(), react()],
  output: "hybrid",
  adapter: vercel()
});