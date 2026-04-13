/** @type {import("tailwindcss").Config} */
const config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          950: "#07080B",
          900: "#0B0D12",
          850: "#111420",
          800: "#151928",
          700: "#1D2235",
        },
        accent: {
          400: "#7C5CFF",
          500: "#5B7CFF",
          600: "#3B82F6",
        },
      },
      boxShadow: {
        glow: "0 0 40px rgba(91,124,255,0.35)",
      },
      backgroundImage: {
        "radial-faint": "radial-gradient(60% 60% at 50% 0%, rgba(91,124,255,0.35), rgba(7,8,11,0))",
        "hero-gradient": "linear-gradient(120deg, rgba(124,92,255,0.35), rgba(59,130,246,0.15), rgba(7,8,11,0))",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        fadeUp: "fadeUp 0.8s ease forwards",
      },
    },
  },
  plugins: [],
};

export default config;
