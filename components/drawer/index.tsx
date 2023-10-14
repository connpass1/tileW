import { BiMenu, BiX } from "react-icons/bi";
import Menu from "../menu";
import Checkbox from "./checkbox";

export default function Drawer() {
  return (  
      <div className="flex lg:hidden justify-self-start">
         <label htmlFor="drawer-toggle">
              <BiMenu  className='icon'/>
            </label>
        <Checkbox/> 
        <div
          className="duration-800 z_mode  -translate-x-full transform bg-white/50
        dark:bg-black/80   transition-all peer-checked:translate-x-0"
        >
          <div className="menu h-full w-3/4 flex-col shadow-lg child:p-2">
            <label htmlFor="drawer-toggle" className="border-solid border-b-gray-500/25 border-b flex justify-end p-1">
              <BiX className='icon'/>
            </label>
          <Menu/>     
          </div>
        </div>
      </div>
  );
}
