 
import { Inter, JetBrains_Mono, Oswald } from "next/font/google";
import "./globals.css";

const font1 = Inter({
  subsets: ['latin','cyrillic'], 
  variable: "--font-font1",
  weight: ["400"]
});
const font3 = JetBrains_Mono({
  subsets: ['latin','cyrillic'],
  variable: '--font-font3', 
 weight:['400']
})
const font2 = Oswald({
  subsets: ['cyrillic'],
  variable: '--font-font2',
  weight:"500" 
})
 
export type ChildrenType = { children: React.ReactNode };
export default function RootLayout({ children }: ChildrenType) {
  return (
    <html lang="ru" data-theme="mydark">
      <body className={` ${font1.variable}  ${font3.variable} ${font2.variable}`}> 
          {children}  
      </body>
    </html>
  );
}
