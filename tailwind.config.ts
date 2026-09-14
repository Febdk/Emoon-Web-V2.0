import type { Config } from "tailwindcss";

// NOTE: Tailwind v4 menggunakan CSS-first approach via @theme di globals.css.
// File ini dipertahankan hanya untuk backward compatibility.
// Warna brand sudah didefinisikan via @theme { --color-* } di globals.css.
const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        // Referensi ke CSS variable yang diset oleh next/font di layout.tsx
        sans: ["var(--font-jakarta)", "Plus Jakarta Sans", "sans-serif"],
        display: ["Clash Display", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;