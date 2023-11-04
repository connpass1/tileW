import { getItem } from "@/app/api/_data/fetch";
import Link from "next/link";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
 
export type IItemProps = {
  params: {uid:string},
  searchParams: { q :string|undefined ,im :string|undefined },
} 
  

export default async function X({ params: { uid }, searchParams: { q = "1",im = "0" }  }:IItemProps) {

  const data = await getItem(uid);
  const index = Math.max(1, parseInt(q));
  const path = { pathname: `/item/${uid}`}
  return<>     
        <span
          className="items-end text-7xl font-extrabold text-primary_dark after:text-3xl after:content-['р.']" 
    >
     {data.price}
    </span> 
   
   <div  className="text-5xl font-extrabold text-primary_dark gap-6  text-slate-500  ">
   <Link href={{...path, query: { q: Math.max (1,index-1),im:im } }}  aria-label="-"
          className= {`${index<1 ?"add_btn_disabled":"add_btn_active"}`}><AiOutlineMinus /></Link >  
      <span >{index}</span>
      <Link href={{...path, query: { q:index+1,im:im } }}  aria-label="+"
          className= {`add_btn_active`}
        ><AiOutlinePlus  /></Link>
       </div> 
    <Link href={{ pathname: `/card/${uid}`, query: { q:index   } }} className="bg-primary p-4 w-32 self-center text-white"> add to card </Link> 
  </>
  }
 
 
