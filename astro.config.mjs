import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';
import react from '@astrojs/react';
import svelte from '@astrojs/svelte';
<<<<<<< feature/hero-section
import vercel from '@astrojs/vercel/serverless';
=======
import sanityImg from "@otterstack/sanity-img-astro/integration";
>>>>>>> dev

export default defineConfig({
  output: 'static',
  adapter: vercel(), 
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
  ]
});