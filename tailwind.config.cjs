/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    darkMode: "class",
    theme: {
        fontFamily: {
            sans: ["Poppins", "sans-serif"],
        },
        extend: {
            colors: {
                brand: {
                    DEFAULT: "#00944D",
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
