/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        foreground: "#092E47",
      },
      fontFamily: {
        sans: ['"Roboto Mono"', "monospace"],
        "roboto-mono": ['"Roboto Mono"', "monospace"],
      },
    },
  },
  plugins: [],
};
