 
import { ColUidParamsType } from "@/app/_utils/models/types";
import dynamic from "next/dynamic";
const Gallery  = dynamic(() => import("@/app/_components/gallery"));
//export const revalidate = 3600 // revalidate at most every hour
async function getData(uid: string  ) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}items/${uid}/test`  ) 
  if (!res.ok) return { images:[ ] }
  return res.json()
} 
export default   function GalleryItemPage(  { params: { uid} }: ColUidParamsType ) {
 
 
  
 
  return    <div> bbb </div>
      
} 