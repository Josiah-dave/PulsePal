import type { Config } from "tailwindcss";
import { currentTheme } from "./src/theme";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: `rgb(${currentTheme.border})`,
        input: `rgb(${currentTheme.input})`,
        ring: `rgb(${currentTheme.ring})`,
        background: `rgb(${currentTheme.background})`,
        foreground: `rgb(${currentTheme.foreground})`,
        primary: {
          DEFAULT: `rgb(${currentTheme.primary})`,
          foreground: `rgb(${currentTheme.foreground})`,
        },
        secondary: {
          DEFAULT: `rgb(${currentTheme.secondary})`,
          foreground: `rgb(${currentTheme.foreground})`,
        },
        destructive: {
          DEFAULT: `rgb(${currentTheme.error})`,
          foreground: `rgb(${currentTheme.foreground})`,
        },
        muted: {
          DEFAULT: `rgb(${currentTheme.muted})`,
          foreground: `rgb(${currentTheme["muted-foreground"]})`,
        },
        accent: {
          DEFAULT: `rgb(${currentTheme.accent})`,
          foreground: `rgb(${currentTheme.foreground})`,
        },
        popover: {
          DEFAULT: `rgb(${currentTheme.popover})`,
          foreground: `rgb(${currentTheme["popover-foreground"]})`,
        },
        card: {
          DEFAULT: `rgb(${currentTheme.card})`,
          foreground: `rgb(${currentTheme["card-foreground"]})`,
        },
        // Theme-based colors
        success: `rgb(${currentTheme.success})`,
        warning: `rgb(${currentTheme.warning})`,
        error: `rgb(${currentTheme.error})`,
        info: `rgb(${currentTheme.info})`,


        // PulsePal Brand Colors (fallback for compatibility)

        
        aqua: "#4ECDC4",
        cream: "#FFF8F2",
        slate: "#2E2E3A",
        cta: "#1A73E8",
        "button-hover": "#B3E5FC",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
