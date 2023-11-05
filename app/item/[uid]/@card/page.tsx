import { getItem } from "@/app/api/_data/fetch";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
 
export type IItemProps = {
  params: {uid:string} 
  
} 
  

export default async function X({ params: { uid }  }:IItemProps) { 
  const data = await getItem(uid);  
  const path = { pathname: `/item/${uid}`}
  return<>     
        <span className="items-end text-7xl font-extrabold text-primary_dark after:text-3xl after:content-['р.']" > 
          {data.price}</span> 
    
   <div  className="text-5xl font-extrabold text-slate-500  gap-6  ">
   <button type="button"  aria-label="-"
          className="border p-2 rounded hover:ring-1 dark:bg-slate-950 ring-primary"><AiOutlineMinus /></button >  
      <span >{1}</span> 
        <button type="button" aria-label="+"
        className="border p-2 rounded hover:ring-1 dark:bg-slate-950 ring-primary"><AiOutlinePlus /></button > 
          
       </div> 
    <button type="button" className="border p-2 rounded hover:ring-1 dark:bg-slate-950 text-slate-500 m-8 ring-primary"> add to card </button> 
  </>
  }
 
 
