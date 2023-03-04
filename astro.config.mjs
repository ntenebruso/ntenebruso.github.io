import { defineConfig } from "astro/config";
import { applyDefaultLayout } from "./src/plugins/layout";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), mdx(), svelte()],
    markdown: {
        syntaxHighlight: "prism",
        remarkPlugins: [applyDefaultLayout],
    },
});
