import Header from "@/components/header";
import Menu from "@/components/menu";
import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import Link from "next/link";
import "./globals.css";
 
 
const roboto = Roboto({
  weight: "300",
  subsets: ["latin", "cyrillic"],
});
const inter = Inter({
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children 
}: {
  
    children: React.ReactNode,
   
    
}) {
  return (
    <html lang="ru" className="dark">
      <body className={inter.className}> 
          <div className="wrapper">    
          <main className="row-start-2">{children} </main> 
          
           
       </div>
        <aside className={roboto.className}>
          <Menu />
        </aside>
        <Header />  
        <footer className={roboto.className}>
        <ul className="flex gap-8">
            <li><Link  href="/" > home</Link></li>
            <li><Link  href="/test" > test</Link></li>
        </ul>
            <span className="block text-sm">
              © 2023. All Rights Reserved. </span> 
        </footer> 
      </body>
    </html>
  );
}
