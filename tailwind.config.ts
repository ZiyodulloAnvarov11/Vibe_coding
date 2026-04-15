import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep blacks
        swissBlack: "#000000",
        swissDark: "#0A0A0A",
        swissCharcoal: "#1A1A1A",
        // Slate grays
        swissSlateDark: "#64748B",
        swissSlateDim: "#94A3B8",
        swissSlateLight: "#E2E8F0",
        // Soft whites
        swissWhiteSoft: "#FAFAFA",
        swissWhitePure: "#FFFFFF",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      gridTemplateColumns: {
        // Strict 12 column grid
        '12': 'repeat(12, minmax(0, 1fr))',
      },
      boxShadow: {
        // Removing shadows to match distraction-free aesthetic
        sm: 'none',
        DEFAULT: 'none',
        md: 'none',
        lg: 'none',
        xl: 'none',
        '2xl': 'none',
        inner: 'none',
      },
    },
  },
  plugins: [],
};
export default config;
