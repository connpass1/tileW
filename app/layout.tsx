 
import dynamic from "next/dynamic";
import { Inter, JetBrains_Mono, Oswald } from "next/font/google";
 
 
const Layout = dynamic(() => import("@/app/_layout/index")    )  
 
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
    <html lang="ru" className="dark">
      <body className={` ${font1.variable}  ${font3.variable} ${font2.variable}`}>
        <div
          className="font-font1 col-span-full col-start-2 row-start-2 grid h-full w-full grid-flow-row 
          auto-rows-max grid-cols-6 gap-y-4  
         max-lg:col-start-1"
        >
          {children}
        </div>
      <Layout/>
      </body>
    </html>
  );
}
