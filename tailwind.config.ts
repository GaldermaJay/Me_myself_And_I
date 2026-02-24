import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        base: "var(--color-base)",
        surface: "var(--color-surface)",
        ink: "var(--color-ink)",
        accent: "var(--color-accent)"
      },
      fontFamily: {
        body: ["var(--font-body)"],
        display: ["var(--font-display)"]
      },
      boxShadow: {
        soft: "0 10px 35px -15px rgba(15, 23, 42, 0.22)"
      }
    }
  },
  plugins: []
};

export default config;
