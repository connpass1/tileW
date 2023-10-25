import { ColUidParamsType } from "@/app/_utils/models/types";
async function getData(path:string ) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${path}/test`  ) 
    if (!res.ok)    return  false
    return res.json()
  }
 
export default async function  Page({ params: {col }  }: ColUidParamsType ){  
    const data = await getData(`${col}/${col}` )
    if (!data ) return "404"
    return <> todo2 {data.title }</>
     
}