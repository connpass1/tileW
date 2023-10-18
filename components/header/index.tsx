import dynamic from "next/dynamic";
import Link from "next/link";
import { BiHome } from "react-icons/bi";
import Drawer from "./drawer";
import Search from "./search";
//import ThemeHandler from "@/components/header/themeHandler" ;
const ThemeHandler = dynamic(() => import("@/components/header/themeHandler"));
 const UserHandler = dynamic(() => import("@/components/header/userHandler"));

export default function Header() {
   return <header> 
      <Link className="icon max-lg:!hidden" href="/">
            <BiHome />
          </Link>
   <ThemeHandler />
        <UserHandler />
        <Search />
        <Drawer />
         
 </header> 
}