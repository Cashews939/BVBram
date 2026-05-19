import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import tailwindv4 from '@tailwindcss/vite'; // Das neue Plugin laden

// https://astro.build/config
export default defineConfig({
  integrations: [react(), keystatic()],
  output: 'server',
  vite: {
    plugins: [tailwindv4()], // Tailwind v4 direkt in den Compiler schieben
  },
});