const colors = require("tailwindcss/colors");

import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 1s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "cloud-palette-red": "#EC4640",
        "cloud-palette-yellow": "#FFC233",
        "cloud-palette-blue": "#3185FC",
      },
      fontFamily: {
        sans: ["var(--font-work-sans)", "work-sans"],
      },
    },
  },
  plugins: [],
} satisfies Config;
