import type { Metadata } from "next";
 
import { Inter, Roboto_Mono } from 'next/font/google';
import DarkModeHandler from "./_layout/darkModeHandler";
import "./globals.css";
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})
 
const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})
 

  
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
      <body className={`${inter.variable} ${roboto_mono.variable}`}>
        <DarkModeHandler />
        {children} 
      </body>
    </html>
  );
}
