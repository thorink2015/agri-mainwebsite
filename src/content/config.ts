import { defineCollection, z } from 'astro:content';

const jurnal = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.string(),
    author: z.string().default('Echipa Hectar'),
    category: z.enum(['Vie', 'Livezi', 'Cereale', 'Tehnic', 'Sezon', 'Sfaturi']),
    tags: z.array(z.string()).default([]),
    imgSrc: z.string().optional(),
    imgAlt: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { jurnal };
