import { ChildrenType } from "@/app/_utils/models/types";
export default function ItemLayout(  {children}  :  ChildrenType  ) { 
  return <div className="bg-blue-900 px-3  flex flex-col  row-start-2 h-[700px]" ><p>gallery</p>  {children} </div>
} 
