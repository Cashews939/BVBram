import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: 'server', // Das sagt Astro, dass wir dynamische Live-Inhalte nutzen
  adapter: vercel()  // Das sagt Astro, dass der Server auf Vercel läuft
});