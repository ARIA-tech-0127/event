import { defineCollection, z } from 'astro:content';

const notes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    date: z.date().optional(),
    // アーカイブ状態を追加（デフォルトは false = アーカイブされていない）
    archived: z.boolean().default(false), 
  }),
});

export const collections = { notes };