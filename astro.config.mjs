import { defineConfig } from "astro/config";
import { applyDefaultLayout } from "./src/plugins/layout";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
import svelte from "@astrojs/svelte";

// Swup
import swup from "@swup/astro";

// https://astro.build/config
export default defineConfig({
    integrations: [
        tailwind(),
        mdx(),
        svelte(),
        swup({
            containers: ["#swup", "#siteNav"],
            globalInstance: true,
        }),
    ],
    markdown: {
        syntaxHighlight: "prism",
        remarkPlugins: [applyDefaultLayout],
    },
    prefetch: false,
});
