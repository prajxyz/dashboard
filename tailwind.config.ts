import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        colorBrand:"#DC4A2D",
        logoGray:"#E7E7E7",
        lightGray:"#B0B0B0",
        darkGray:"#4F4F4F",
        lightOrange:"#FEF4F2",
        darkGreen:"#067647",
        mediumGreen:"#17B26A",
        greenBorder:"#ABEFC6",
        lightGreen:"#ECFDF3"
        },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
