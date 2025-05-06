import { defineCollection, z } from "astro:content";
import { file, glob } from "astro/loaders";

const blog = defineCollection({
    loader: glob({ pattern: "**/*.mdx", base: "./src/content/blog" }),
    schema: z.object({
        title: z.string(),
        publishedAt: z.date(),
        author: z.string(),
        tags: z.array(z.string()),
        summary: z.string(),
    }),
});

const projects = defineCollection({
    loader: file("src/content/projects/projects.json"),
    schema: z.object({
        id: z.string(),
        name: z.string(),
        description: z.string(),
        button: z
            .object({
                text: z.string(),
                url: z.string().url(),
            })
            .optional(),
        tags: z.array(z.string()),
    }),
});

export const collections = { blog, projects };
