import { ChildrenType } from "@/app/_utils/models/types";
export default function ItemLayout(  {children}  :  ChildrenType  ) {  
  return   <div className="w-full h-[420px] col-start-1 sm:h-[480px] md:h-[420px]  col-span-4 md:col-span-2 flex flex-col "> {children}  </div>
} 
 