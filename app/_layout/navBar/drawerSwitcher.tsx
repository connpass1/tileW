"use client"

import { usePathname } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import { BiMenu } from "react-icons/bi";

export default function X() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    useEffect(() => {
        setOpen(false);
    }, [pathname]);
  
  
    function changeOpen(event: ChangeEvent<HTMLInputElement>): void {
        setOpen(!open)
    }

    return <>
     <label htmlFor="drawer-toggle"  > 
    <BiMenu className={` peer h-8 w-8 cursor-pointer  ${open!&&"rotate-90"}`}  /> 
  </label> 
    
    
    <input type="checkbox" id="drawer-toggle" checked={!open} onChange={changeOpen} className="peer sr-only collapse relative" /> 
    </>
}
 