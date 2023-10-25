import { ChildrenType } from "@/app/_utils/models/types";

export default function ItemLayout(  {children}  :  ChildrenType  ) { 
  return <div className="bg-green-800 px-3  flex flex-col    " > <p>Col Layout 1 {children}</p></div>
} 
