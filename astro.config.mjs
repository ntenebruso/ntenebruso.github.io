import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
import svelte from "@astrojs/svelte";

// swup
import swup from "@swup/astro";

// https://astro.build/config
export default defineConfig({
    integrations: [
        tailwind(),
        mdx(),
        svelte(),
        swup({
            theme: false,
            // parallel: true,
        }),
    ],
    markdown: {
        syntaxHighlight: "prism",
    },
    prefetch: false,
});
