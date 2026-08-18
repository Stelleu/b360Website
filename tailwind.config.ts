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
        ink: "#0A0A0A",
        cream: "#F4F0E6",
        gold: {
          DEFAULT: "#C9A46A",
          muted: "#A67C4A",
          light: "#E4C99A",
        },
        heat: "#E10600",
        electric: "#2F6BFF",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-syne)", "var(--font-inter)", "sans-serif"],
      },
      letterSpacing: {
        tighter2: "-0.06em",
      },
      maxWidth: {
        site: "1400px",
      },
      transitionTimingFunction: {
        outExpo: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      backgroundImage: {
        grain:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='.55'/></svg>\")",
      },
    },
  },
  plugins: [],
};

export default config;
