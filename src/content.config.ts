import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const aktuelles = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdoc}", base: "./src/content/aktuelles" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum(['Verein', 'Senioren', 'Junioren']).default('Verein'),
    draft: z.boolean().default(false).optional(),
    coverImage: z.string().optional(),
    teaser: z.string().optional(),
  }),
});

const termine = defineCollection({
  loader: glob({ pattern: "**/*.yaml", base: "./src/content/termine" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    time: z.string().optional(),
    location: z.string().optional(),
  }),
});

const senioren = defineCollection({
  loader: glob({ pattern: "**/*.yaml", base: "./src/content/senioren" }),
  schema: z.object({
    name: z.string(),
    order: z.number().default(1),
    badge: z.string().optional(),
    training: z.string().optional(),
    trainer: z.string().optional(),
    description: z.string().optional(),
    buttonText: z.string().optional(),
    buttonLink: z.string().optional(),
    teamPhoto: z.string().optional(),
    fussballWidget: z.string().optional(),
  }),
});

const junioren = defineCollection({
  loader: glob({ pattern: "**/*.yaml", base: "./src/content/junioren" }),
  schema: z.object({
    name: z.string(),
    bereich: z.enum(['grossfeld', 'kleinfeld']).default('grossfeld'),
    order: z.number().default(1),
    badge: z.string().optional(),
    year: z.string().optional(),
    training: z.string().optional(),
    trainer: z.string().optional(),
    description: z.string().optional(),
    liveCenterId: z.string().optional(),
    teamPhoto: z.string().optional(),
    fussballWidget: z.string().optional(),
  }),
});

export const collections = {
  aktuelles,
  termine,
  senioren,
  junioren,
};
