import { ChildrenType } from "@/app/_utils/models/types";
export default function ItemLayout(  {children}  :  ChildrenType  ) { 


  return <div className="w-full h-[280px] sm:h-[320px]   sm:h-[340px]  md:w-1/2  md:h-[280px]  lg:h-[280px] 2xl:h-[340px] test relative"> 
      {children}  
    </div>
   
} 
 