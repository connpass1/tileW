import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { BiChevronRight, BiHome } from "react-icons/bi";
import Drawer from "../_components/drawer";
import Menu from "../_components/menu";
import Search from "../_components/search";
import ThemeHandler from "../_components/themeHandler";
import UserHandler from "../_components/userHandler";
 
const roboto = Roboto({
  weight: "300",
  subsets: ["latin", "cyrillic"],
});
const inter = Inter({
  weight: "300",
  subsets: ["latin", "cyrillic"],
});
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  breadcrumb,
}: {
  children: React.ReactNode;
  breadcrumb: React.ReactNode;
}) {
  return (
    <>
      <div
        className="col-start-1 col-end-[-1] row-end-[-2] flex
    h-full   min-h-screen flex-col   justify-start   rounded p-2  lg:col-start-2 lg:dark:bg-slate-900"
      >
        <ol className="font-extralights inline-flex items-center justify-end gap-2 text-center text-sm">
          <li>
            <Link
              href="/" className="inline-flex items-baseline gap-1 text-center" > 
              <AiOutlineHome className="self-center" />
              <span>Home </span>
            </Link>
          </li> 
          <li>
            <BiChevronRight />
          </li>
          
             {breadcrumb} 
          
        </ol>
        <main className={inter.className}>{children}</main>
      </div>
      <header>
        <Link className="icon max-lg:!hidden" href="/">
          <BiHome />
        </Link>
        <Search />
        <Drawer>
          <Menu />
        </Drawer>
        <ThemeHandler />
        <UserHandler />
      </header>
      <aside className={roboto.className}>
        <Menu />
      </aside>
      <footer className={roboto.className}>
        <ul className="flex gap-8">
          <li>
            <Link href="/"> home</Link>
          </li>
          <li>
            <Link href="/test"> test</Link>
          </li>
        </ul>
        <span className="block text-sm">© 2023. All Rights Reserved. </span>
      </footer>
    </>
  );
}
