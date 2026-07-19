import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import { z } from "zod";

const docs = defineCollection({
    name: "docs",
    directory: "./src/docs",
    include: "**/*.md",
    schema: z.object({
        content: z.string(),
    }),
    transform: async (document, context) => {
        const mdx = await compileMDX(context, document);
        return {
            ...document,
            mdx,
        };
    },
});

export default defineConfig({
    content: [docs],
});
