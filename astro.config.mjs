import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';
import react from '@astrojs/react';
import svelte from '@astrojs/svelte';
import vercel from '@astrojs/vercel';
import sanityImg from "@otterstack/sanity-img-astro/integration";
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'static',
  adapter: vercel(),
  site: 'https://bebr.studio',
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
    sitemap(),
  ],
});