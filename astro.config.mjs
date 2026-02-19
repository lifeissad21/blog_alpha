// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://lifeissad21.github.io',
  base: '/blog_alpha',
  vite: {
    plugins: [tailwindcss()]
  },
  prefetch:{
    defaultStrategy: 'viewport',
    prefetchAll: true
  },
  integrations: [mdx(), react()]
});