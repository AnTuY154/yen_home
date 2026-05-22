import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        leaf: "#4CAF50",
        wood: "#6D4C41",
        cream: "#F5F5DC",
        ink: "#211B16",
      },
      boxShadow: {
        soft: "0 24px 80px rgba(33, 27, 22, 0.14)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        fadeUp: "fadeUp 800ms ease both",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
