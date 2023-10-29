import getData from "@/app/_utils/data/getData";
import { IItem } from "@/app/_utils/models/item";
import { ColUidParamsType } from "@/app/_utils/models/types";
export default async function  Item({
    params: {uid},
}: ColUidParamsType) { 
    const data:IItem = await getData(uid) 
    return <div className="flex flex-col">
       <p> {data.title} </p> 
        <p> {data.rate }  </p>
        <p> купить </p>
    </div>   
      
 }