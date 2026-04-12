import { createRequire } from "module"

const require = createRequire(import.meta.url)

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "system-ui", "sans-serif"],
        display: ["Instrument Sans", "DM Sans", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
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
        "fade-up": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        "role-cycle": {
          "0%, 22%": { opacity: "1" },
          "25%, 100%": { opacity: "0" },
        },
        "timeline-node-pulse": {
          "0%, 100%": {
            boxShadow: "0 0 0 0 hsl(var(--primary) / 0.35)",
          },
          "50%": {
            boxShadow: "0 0 0 6px hsl(var(--primary) / 0)",
          },
        },
        "gradient-border-flow": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "doodle-dash": {
          to: { strokeDashoffset: "0" },
        },
        "arrow-point": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(4px, 4px)" },
        },
        "foil-sheen": {
          "0%": { transform: "translateX(-120%) skewX(-12deg)" },
          "100%": { transform: "translateX(220%) skewX(-12deg)" },
        },
        "arrow-frame-a": {
          "0%, 48%": { opacity: "1" },
          "52%, 100%": { opacity: "0.2" },
        },
        "arrow-frame-b": {
          "0%, 48%": { opacity: "0.25" },
          "52%, 100%": { opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.6s ease-out forwards",
        "fade-in": "fade-in 0.5s ease-out forwards",
        shimmer: "shimmer 2s infinite",
        "timeline-node-pulse":
          "timeline-node-pulse 2.8s ease-in-out infinite",
        "gradient-border-flow":
          "gradient-border-flow 10s ease-in-out infinite",
        "doodle-dash": "doodle-dash 2.4s ease-out forwards",
        "arrow-point": "arrow-point 1.6s ease-in-out infinite",
        "foil-sheen": "foil-sheen 0.9s ease-out",
        "arrow-frame-a": "arrow-frame-a 1.4s steps(1, end) infinite",
        "arrow-frame-b": "arrow-frame-b 1.4s steps(1, end) infinite",
      },
      backgroundImage: {
        "grid-subtle":
          "linear-gradient(to right, hsl(var(--border) / 0.35) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border) / 0.35) 1px, transparent 1px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
