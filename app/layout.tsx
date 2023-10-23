import type { Metadata } from "next";
import { Inter } from "next/font/google";

import DarkModeHandler from "./_components/darkModeHandler";
import "./globals.css";
const inter = Inter({
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,breadcrumb
}: {
  breadcrumb: React.ReactNode,
  children: React.ReactNode,
}) {
  return (
    <html lang="ru" className="dark">
      <body className={inter.className}>
        <DarkModeHandler />
        {children}
        {breadcrumb}   
      </body>
    </html>
  );
}
