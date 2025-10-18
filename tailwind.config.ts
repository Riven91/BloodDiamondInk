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
          primary: "#047857",
          accent: "#00B869",
          text: "#EAEAEA",
          muted: "#1A1A1A"
        },
        brand: {
          DEFAULT: "#047857",
          hover: "#065F46",
          ring: "#00B869"
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
