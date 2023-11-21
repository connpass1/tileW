import { ChildrenType } from "@/app/layout";
import dynamic from "next/dynamic";
import Link from "next/link";
import { BiChevronLeft, BiHome, BiLogIn, BiMoon, BiSun } from "react-icons/bi";
const DrawerSwitcher = dynamic(() => import("./drawerSwitcher"));
const ThemeSwitcher = dynamic(() => import("./themeSwitcher"));

export default function X({ children }: ChildrenType) {
  return (
    <>
      <div className="col-span-full col-start-1 row-start-1   h-full grid-cols-3 grid-center gap-4  px-4 dark:bg-slate-900 dark:text-slate-200 ">
        <Link className="justify-self-start" href={"/"} aria-label="home">
          <BiHome className="h-8 w-8 max-md:h-6 max-md:w-6" />
        </Link>

        <div className="col-end-[-1] grid grid-cols-3 gap-4 justify-self-end  lg:grid-cols-2 place-items-center">
          <label aria-label="theme" className="grid-center swap swap-rotate">
            <ThemeSwitcher />
         
            <BiMoon className="swap-on" />
             <BiSun className="swap-off" />
          </label>
          <Link href={"/login"} aria-label="login">
            <BiLogIn className="swap-on" />
          </Link>
          <div className="grid-center lg:hidden">
            <DrawerSwitcher />
            <div
              className="duration-800    fixed left-0 top-0 z-50  grid h-full   w-full   translate-x-0 transform  grid-cols-4
         bg-neutral text-neutral-content transition-all peer-checked:-translate-x-full  "
            >
              <div
                className="col-start-1  col-end-[-2]   h-full w-full     shadow-lg 
               sm:w-3/4 md:w-1/2"
              >
               
                <label
                  htmlFor="drawer-toggle"
                  aria-label="navigation open"
                  className="flex justify-end p-4 "
                >
                  <BiChevronLeft className="h-8 w-8  cursor-pointer   justify-end" />
                </label><aside> {children}</aside>
               
              </div>
              <label
                htmlFor="drawer-toggle"
                className="h-full w-full  glass"
                aria-label="close"
              />
            </div>
          </div> 
        </div>
      </div> 
      <aside className="col-start-1 row-start-2 mr-4 max-lg:hidden"> 
        {children} 
      </aside>
    </>
  );
}
