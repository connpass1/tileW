import { ChildrenType } from "@/app/_utils/models/types";
export default function ItemLayout(  {children}  :  ChildrenType  ) { 
  return <div className="bg-sky-900 px-3 flex flex-col relative h-[600px] w-auto" ><p>item Layout gallery</p>{children} </div>
} 
 