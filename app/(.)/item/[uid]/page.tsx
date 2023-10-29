 import { getItem } from "@/app/_utils/data/getData";
import { ColUidParamsType } from "@/app/_utils/models/types";
 
export default async function  Title({
    params: {col},
}: ColUidParamsType) { 
  const data = await getItem(col)  
  return <div className="flex flex-col"> 
  <div> price {data?.price}  </div > 
  <div> tags {data?.tags}  </div > 
  <div> slug {data?.slug}  </div > 
  <div> quantity {data?.quantity}  </div > 
  <div> rate {data?. created}  </div > 
  <div> rate {data?.  updated}  </div >  
   </div >  
 }