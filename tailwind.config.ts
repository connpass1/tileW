import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend:{
      aspectRatio: {
        'gallery': '4 / 3',
      },
    
      fontFamily: {
        font1: ['var(--font-font1)'],
        font3: ['var(--font-font3)'],
        font2:['var(--font-font2)'],
      },
 
  
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mydark: {
        
"primary": "#1e3a8a",
        
"secondary": "#1d4ed8",
        
"accent": "#0ea5e9",
        
"neutral": "#111827",
        
"base-100": "#111827",
        
"info": "#374151",
        
"success": "#065f46",
        
"warning": "#92400e",
        
"error": "#991b1b",
        }, mytheme: {
          
          "primary": "#1e3a8a",
                   
          "secondary": "#0e7490",
                   
          "accent": "#ff0000",
                   
          "neutral": "#374151",
                   
          "base-100": "#d1d5db",
                   
          "info": "#008bc8",
                   
          "success": "#15803d",
                   
          "warning": "#ffb600",
                   
          "error": "#e10049",
                   },
      },
    ],
    darkTheme: "mydark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
export default config;
