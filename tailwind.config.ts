import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // Define the animation keyframes
      keyframes: {
        progressbar: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        easein: {
          "0%": { transform: "translateY(100%) translateX(-50%)" },
          "100%": { transform: "translateY(-50%) translateX(-50%)" },
        },
        easeout: {
          "0%": { transform: "translateY(-50%) translateX(-50%)" },
          "100%": { transform: "translateY(100%) translateX(-50%)" },
        },
      },

      // Define loading related classes
      animation: {
        progressbar: "progressbar 10s linear infinite",
        easein: "easein 1s ease-in",
        easeout: "easeout 1s ease-in",
      },
    },
  },
  plugins: [],
};
export default config;
