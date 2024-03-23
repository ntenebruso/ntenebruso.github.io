/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    darkMode: "class",
    theme: {
        fontFamily: {
            sans: ["Inter Variable", "sans-serif"],
            display: ["Sora Variable", "sans-serif"],
        },
        extend: {
            colors: {
                brand: {
                    light: "#D7F3E5",
                    DEFAULT: "#00944D",
                    dark: "#006333",
                },
            },
            typography: ({ theme }) => ({
                DEFAULT: {
                    css: {
                        "--tw-prose-bullets": theme("colors.brand.DEFAULT"),
                        "--tw-prose-invert-bullets": theme(
                            "colors.brand.DEFAULT"
                        ),
                    },
                },
            }),
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
