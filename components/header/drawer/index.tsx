import { BiMenu, BiX } from "react-icons/bi";
import Menu from "../../menu";
import Checkbox from "./checkbox";

export default function Drawer() {
  return (  
      <div className="flex lg:hidden justify-self-start">
         <label htmlFor="drawer-toggle">
              <BiMenu  className='icon'/>
            </label>
        <Checkbox/> 
        <div
          className="duration-800 z_mode  -translate-x-full transform   bg-primary/50
        dark:bg-primary_bg_dark/50   transition-all peer-checked:translate-x-0"
        >
          <div className="h-full  w-full  sm:w-3/4 md:w-1/2 flex-col shadow-lg  bg-primary_dark text-gray-400 dark:bg-primary_bg_dark">
            <label htmlFor="drawer-toggle" className="border-solid border-b-gray-500/25 border-b flex justify-end p-1">
              <BiX className='icon'/>
            </label>
          <Menu/>     
          </div>
        </div>
      </div>
  );
}
