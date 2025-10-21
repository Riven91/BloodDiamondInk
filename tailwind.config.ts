import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        blooddiamond: {
          background: "#0B0B0B",
          primary: "#C0C0C0", // Silber
          accent: "#16A34A", // Grün
          text: "#EAEAEA",
          muted: "#1A1A1A"
        },
        brand: {
          DEFAULT: "#16A34A", // Grün
          hover: "#15803D", // Dunkelgrün
          ring: "#4ADE80" // Hellgrün
        }
      },
      fontFamily: {
        display: ["var(--font-bebas-neue)"],
        body: ["var(--font-inter)"]
      }
    }
  },
  plugins: []
};

export default config;
