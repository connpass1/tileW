import type { Config } from 'tailwindcss'
 
const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary_bg: "#3730a3",
        primary_bg_dark: "#1e1b4b",
        primary: "#1d4ed8",
        primary_light: "#3b82f6",
        primary_dark: "#1e3a8a",
        maskColor: "rgba(0,0,0,0.7)",
        error_dark: "#991b1b",
        error_light: "#dc2626",
        error:"#b91c1c"
      },
    },
  },
  plugins: [

  ],
}
export default config
