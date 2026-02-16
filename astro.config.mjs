import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';
import react from '@astrojs/react';
import svelte from '@astrojs/svelte';

export default defineConfig({
  integrations: [
    sanity({
      projectId: 'nma29b6o',
      dataset: 'bebrstudio',
      useCdn: true,
      studioBasePath: '/studio',
    }),
    svelte(),
    react(),
  ]
});
