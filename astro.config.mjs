import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';
import markdoc from '@astrojs/markdoc';

export default defineConfig({
  site: 'https://bv-bram.vercel.app',
  output: 'hybrid',
  adapter: vercel(),
  integrations: [react(), tailwind(), keystatic(), sitemap(), markdoc()],
  vite: {
    ssr: {
      noExternal: ['@keystar/ui', /@react-aria/, /@internationalized/],
    },
  },
});