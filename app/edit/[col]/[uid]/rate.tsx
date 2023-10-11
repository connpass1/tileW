import { useState } from "react";
import { BiSolidStar } from "react-icons/bi";
 
export default function Rate({ num,onChange}:{num: number ,onChange:(x: number)=> void} ) {
    const  [state,setState]=useState(num)
    const handle = (x: number) => {
         const v=x!==state? x : x+1
        setState(v)
        onChange(v)
    };
    return <div className="flex  gap-2 text-4xl text-yellow-500 cursor-pointer " >
        {[0, 1, 2, 3, 4].map((x) =>  <BiSolidStar key={x} className= {state>x? "text-yellow-500":"text-yellow-100"} onClick={()=>handle(x)}/>)} 
    </div>
}
