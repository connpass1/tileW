import { getItem } from "@/app/api/_data/fetch";
 
import { IItem } from "@/app/api/_data/types";
 
import dynamic from "next/dynamic";
 
export type IItemProps = {
  params: {uid:string}  
} 
const  Add  = dynamic(() =>
  import('./add'), {
    loading: () => <div>Loading...</div>,
  })
 
export default async function X({ params: { uid }  }:IItemProps) { 
  const data = await getItem(uid);  
  const path = { pathname: `/item/${uid}`}
  return<>  
        <span className="items-end text-7xl   text-primary_dark after:text-3xl after:content-['р.']" > 
         {data.price} </span> 
            { data.quantity!==0? <span className='text-2xl self-center text-red-600'> нет в наличии</span>: <Add item={data as IItem}/>} 
         
  </>
  }
 
 
