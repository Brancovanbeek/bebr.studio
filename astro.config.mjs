import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';
import react from '@astrojs/react';
import svelte from '@astrojs/svelte';
import sanityImg from "@otterstack/sanity-img-astro/integration";

export default defineConfig({
  integrations: [
    sanity({
      projectId: 'nma29b6o',
      dataset: 'bebrstudio',
      useCdn: true,
      studioBasePath: '/studio',
    }),
    sanityImg({ options: { auto: 'format' } }),
    svelte(),
    react(),
  ],
});
