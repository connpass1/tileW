import { ChildrenType } from "@/app/_utils/models/types";
export default function ItemLayout(  {children}  :  ChildrenType  ) { 
  return <div className="flex flex-col  row-start-2 h-[700px]" ><p>gallery</p>  {children} </div>
} 
