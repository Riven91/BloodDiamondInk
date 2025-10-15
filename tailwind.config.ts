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
          primary: "#064E3B",
          accent: "#00B869",
          text: "#EAEAEA",
          muted: "#1A1A1A"
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
