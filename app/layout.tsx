import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { JetBrains_Mono, Noto_Sans, Oswald } from "next/font/google";
 
 
const Layout = dynamic(() => import("@/app/_layout/index")    )  
 
import "./globals.css";

const sans = Noto_Sans({
  subsets: ['latin','cyrillic'], 
  variable: "--font-sans",
  weight: ["600"]
});
const mono = JetBrains_Mono({
  subsets: ['latin','cyrillic'],
  variable: '--font-mono', 
 weight:['400']
})
const oswald = Oswald({
  subsets: ['cyrillic'],
  variable: '--font-oswald',
  weight:"400" 
})
 
export type ChildrenType = { children: React.ReactNode };
export default function RootLayout({ children }: ChildrenType) {
  return (
    <html lang="ru" className="dark">
      <body className={` ${sans.variable}  ${mono.variable} ${oswald.variable}`}>
        <div
          className="font-sans col-span-full col-start-2 row-start-2 grid h-full w-full grid-flow-row 
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
