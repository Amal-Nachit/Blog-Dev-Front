import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      customBlue: "#0D6EFD",
      connexionBlue: "#0DCAF0",
      customYellow: "#FFD911",
      customBlack: "#0A0909",
      customGray: "#D9D9D9",
      customWhite: "#ffffff",
      customRed: "#FFD911",
      customGreen: "#198754",
    },
    screens: {
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
      "4xl": "2560px",
      "5xl": "3200px",
      "6xl": "3840px",
    },
  },
  plugins: [],
};
export default config;