import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7C3AED",
        secondary: "#F59E0B",
        accent: "#D97706",
        dark: "#0F0A1E",
        light: "#FAF8FF",
      },
      fontFamily: {
        // Kita set default sans ke font yang bakal kita import di layout
        sans: ['var(--font-jakarta)', 'sans-serif'],
        display: ['var(--font-clash)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;