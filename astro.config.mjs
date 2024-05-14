import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import metaTags from "astro-meta-tags";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), metaTags()]
});