import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
 
 
        primary: "#1d4ed8",
        primary_light: "#3b82f6",
        primary_dark: "#1e3a8a",
  
        error_dark: "#991b1b",
        error_light: "#dc2626",
        error: "#b91c1c",
 
      },
      spacing: { 
        '124': '32rem',
        '144': '36rem',
      }
    },
  },
  plugins: [
    function ({ addVariant }: { addVariant: any }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
export default config;
