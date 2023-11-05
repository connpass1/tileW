import { mainMenu } from "@/app/api/_data/menu";
import dynamic from "next/dynamic";
import Link from "next/link";
import { BiHome, BiLogIn, BiMoon, BiSun } from "react-icons/bi";
const DrawerSwitcher = dynamic(() => import(  "./drawerSwitcher")  )  
const ThemeSwitcher = dynamic(() => import ("./themeSwitcher"));
 
export default function NavBar() {
  return (
    <div className="col-span-full col-start-1 row-start-1 grid h-full grid-cols-3  place-items-center  gap-4  px-4 dark:bg-slate-900">
      <Link className="justify-self-start" href={"/"}>
        <BiHome className="peer h-8  w-8" />
      </Link>
      <div className="col-start-2 col-end-[-2]">search</div>

      <div className="col-end-[-1] grid grid-cols-3 gap-2 justify-self-end lg:grid-cols-2 child:cursor-pointer">
        <label className="relative inline-flex  items-center">
          <ThemeSwitcher />
          <BiSun className="peer h-8 w-8 peer-checked:hidden" />
          <BiMoon className="peer hidden h-8   w-8  peer-checked:block" />
        </label>
        <Link className="justify-self-start" href={"/login"}>
          <BiLogIn className="peer h-8  w-8" />
        </Link>

        <div className="flex justify-self-start lg:hidden">
          <DrawerSwitcher />
          <div
            className="duration-800 fixed left-0 top-0 z-50 grid  h-full w-full   translate-x-0   transform grid-cols-4  
         bg-primary/50 dark:bg-slate-950/80 transition-all peer-checked:-translate-x-full  dark:bg-primary_bg_dark/50"
          >
            <div className="col-start-1  col-end-[-2] flex flex-col h-full w-full bg-primary_dark text-gray-400 shadow-lg 
             dark:bg-slate-900 sm:w-3/4 md:w-1/2 child:p-2">
               
                {mainMenu.map((l, i) => (
                  <Link href={l[1]} key={i}>
                    {l[0]}
                  </Link>
                ))}
              
            </div>
            <label
              htmlFor="drawer-toggle"
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
