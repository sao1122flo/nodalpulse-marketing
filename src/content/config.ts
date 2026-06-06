import { defineCollection, z } from 'astro:content';

const help = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['getting-started', 'features', 'account', 'reference']),
    order: z.number(),
    updatedDate: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { help };
