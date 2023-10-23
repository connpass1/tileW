import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
 
const Gallery = dynamic(() => import("@/app/_components/gallery"));
export const revalidate = 3600 // revalidate at most every hour
async function getData(uid: string  ) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}items/${uid}/images`  ) 
  if (!res.ok)    return [ ] 
  return res.json()
}
 
export default async function GalleryItemPage(  { params: { uid} }: { params: {uid: string } }  ) {
  const data:string[] = await getData(uid)
  if (data.length === 0) notFound();  
  
  return <Gallery urls={data}></Gallery> 
       
}