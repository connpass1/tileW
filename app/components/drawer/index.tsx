import { BiMenu, BiX } from "react-icons/bi";
import Menu from "../menu";

export default function Drawer() {
  return (
    
      <div className="flex lg:hidden justify-self-start">
         <label htmlFor="drawer-toggle">
              <BiMenu  className='icon'/>
            </label>

        <input
          type="checkbox"
          id="drawer-toggle"
          className="peer sr-only collapse relative"
          defaultChecked={false}
        />
        <div
          className="duration-800 z_mode  -translate-x-full transform 
        bg-black/80   transition-all peer-checked:translate-x-0"
        >
          <div className="bg1 h-full w-3/4 flex-col shadow-lg ">
            <label htmlFor="drawer-toggle" className="border-solid border-b-gray-500/25 border-b flex justify-end p-1">
              <BiX className='icon'/>
            </label>
          <Menu/> 
           
          </div>
        </div>
      </div>
    
  );
}
