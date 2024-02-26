import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: "#2EC4B6",
        secondary: "#04080F",
        transparent: "#2EC4B6",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      animation: {
        loop: "loop 1s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
