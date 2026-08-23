import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Brand book: Nexus Teal #00BAC4, Deep Teal #017A85
        primary: {
          50: "#e6fafb",
          100: "#ccf5f7",
          200: "#99ebee",
          300: "#66e0e6",
          400: "#33d6dd",
          500: "#00bac4",
          600: "#017a85",
          700: "#016068",
          800: "#01464d",
          900: "#013238",
        },
        dark: {
          50: "#f1f5f9",
          100: "#e2e8f0",
          200: "#cbd5e1",
          300: "#94a3b8",
          400: "#64748b",
          500: "#475569",
          600: "#334155",
          700: "#1a2744",
          800: "#0c1630",
          900: "#070b14",
        },
        brand: {
          white: "#ffffff",
          cloud: "#f1f5f9",
          snow: "#f1f5f9",
          teal: "#00bac4",
          deep: "#017a85",
          navy: "#102865",
          obsidian: "#070b14",
        },
      },
      animation: {
        gradient: "gradient 8s linear infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        gradient: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
