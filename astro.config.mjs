import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
import svelte from "@astrojs/svelte";

import tailwind from "@tailwindcss/vite";
import { unified } from "@astrojs/markdown-remark";

import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwind()],
    },
    integrations: [mdx(), svelte()],
    markdown: {
        syntaxHighlight: "prism",
        processor: unified({
            remarkPlugins: [remarkMath],
            rehypePlugins: [rehypeKatex],
        }),
    },
    prefetch: false,
    fonts: [
        {
            provider: fontProviders.fontsource(),
            name: "DM Sans",
            cssVariable: "--font-dm-sans",
            weights: ["100 1000"],
        },
        {
            provider: fontProviders.fontsource(),
            name: "Fraunces",
            cssVariable: "--font-fraunces",
            weights: ["100 900"],
        },
    ],
});
