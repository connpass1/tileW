 
import { NotFoundImage } from "@/app/_components/skeleton";
import { ColUidParamsType } from "@/app/_utils/models/types";
import dynamic from "next/dynamic";
const Gallery  = dynamic(() => import("@/app/_components/gallery"));
export const revalidate = 3600 // revalidate at most every hour
async function getData(uid: string  ) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}items/${uid}/images`  ) 
  if (!res.ok)    return [ ] 
  return res.json()
} 
export default async function GalleryItemPage(  { params: { uid} }: ColUidParamsType ) {
 
  const data:string[] = await getData(uid)
  if (data.length === 0) return <NotFoundImage /> 
  return    <div>Gallery <Gallery urls={data}></Gallery>  </div>
       
} 