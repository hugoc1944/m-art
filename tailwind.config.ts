import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/sections/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "var(--color-deep-charcoal)",
        warmBlack: "var(--color-warm-black)",
        editorialWhite: "var(--color-editorial-white)",
        coral: "var(--color-muted-coral)",
        honey: "var(--color-muted-honey)",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        serif: ["Didot", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;