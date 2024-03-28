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
        mytheme: {
          darkBackground: "#212121",
          black: "#121212",
          greyText: "#c1c1c1"
        },
      },
    },
  },
  plugins: [],
};
export default config;
