import Link from "next/link";
import { BiHome } from "react-icons/bi";
import Drawer from "./drawer";
import Search from "./search";
import dynamic from "next/dynamic";

const ThemeHandler = dynamic(() => import("@/components/header/themeHandler"));
const UserHandler = dynamic(() => import("@/components/header/userHandler"));

export default function Header() {
   return <header> 
      <Link className="!hidden lg:!block" href="/">
            <BiHome className="icon" />
          </Link>
   <ThemeHandler />
        <UserHandler />
        <Search />
        <Drawer />
         
 </header> 
}