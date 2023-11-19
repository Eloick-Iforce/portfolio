import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: "#DF2935",
        secondary: "#57C4E5",
        transparent: "rgba(87, 196, 229, 0.5)",
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
