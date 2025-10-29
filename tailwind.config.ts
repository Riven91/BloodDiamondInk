import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./content/**/*.{md,mdx}"
  ],
  safelist: [
    "bg-[url('/herobackground3.webp')]",
    "bg-[position:50%_12%]",
    "bg-[position:50%_88%]",
    "bg-cover",
    "bg-center",
    "min-h-[100svh]",
    "md:min-h-[100vh]"
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
