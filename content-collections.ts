import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import { z } from "zod";
import remarkImageCarousel from "./src/remark-image-carousel";

const docs = defineCollection({
    name: "docs",
    directory: "./docs",
    include: "**/*.md",
    schema: z.object({
        content: z.string(),
        order: z.number().optional(),
        title: z.string().optional(),
    }),
    transform: async (document, context) => {
        const mdx = await compileMDX(context, document, {
            remarkPlugins: [remarkImageCarousel],
        });
        return {
            ...document,
            mdx,
        };
    },
});

export default defineConfig({
    content: [docs],
});
