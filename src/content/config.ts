import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    img: z.string(),
    etiquetas: z.array(z.string()),
    time: z.string()
  })
});

export const collections = { posts };
