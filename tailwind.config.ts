import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
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
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        mars: {
          DEFAULT: "hsl(var(--mars-glow))",
          secondary: "hsl(var(--mars-secondary))",
        },
        space: {
          deep: "hsl(var(--space-deep))",
          nebula: "hsl(var(--nebula))",
        },
      },
      backgroundImage: {
        'gradient-mars': 'var(--gradient-mars)',
        'gradient-space': 'var(--gradient-space)',
        'gradient-nebula': 'var(--gradient-nebula)',
      },
      boxShadow: {
        'glow-mars': 'var(--glow-mars)',
        'glow-soft': 'var(--glow-soft)',
        'shadow-deep': 'var(--shadow-deep)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "rotate-planet": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "mars-glow": {
          from: { filter: "drop-shadow(var(--glow-mars))" },
          to: { filter: "drop-shadow(0 0 40px hsl(15 85% 58% / 0.6))" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "nebula-drift": {
          from: { transform: "translate(-10px, -10px) scale(1)" },
          to: { transform: "translate(10px, 10px) scale(1.1)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "rotate-planet": "rotate-planet 60s linear infinite",
        "mars-glow": "mars-glow 3s ease-in-out infinite alternate",
        "fade-in": "fade-in 0.8s ease-out forwards",
        "fade-in-delay": "fade-in 0.8s ease-out 0.3s forwards",
        "nebula-drift": "nebula-drift 20s ease-in-out infinite alternate",
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
