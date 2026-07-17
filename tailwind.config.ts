import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F7F3EC",
        "cream-light": "#FFFDF9",
        "cream-dark": "#EFE7D8",
        ink: "#1C1917",
        "ink-soft": "#232020",
        border: "#E2DACC",
        "border-dark": "#3B3835",
        rust: "#C2410C",
        "rust-dark": "#9A3412",
        "rust-light": "#EA580C",
        amber: "#FDBA74",
        gold: "#C2A87E",
      },
      fontFamily: {
        display: ["var(--font-bricolage)", "sans-serif"],
        sans: ["var(--font-public-sans)", "sans-serif"],
        mono: ["var(--font-ibm-plex-mono)", "monospace"],
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(18px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.6s ease both",
        blink: "blink 1.2s step-end infinite",
      },
    },
  },
  plugins: [],
};

export default config;
