import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const aktuelles = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdoc}", base: "./src/content/aktuelles" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum(['Verein', 'Senioren', 'Junioren']).default('Verein'),
    teaser: z.string().optional(),
  }),
});

export const collections = {
  aktuelles,
};
