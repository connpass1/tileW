/* eslint-disable @next/next/no-img-element */
import Gallery from "@/app/_components/gallery"
import Image from "next/image"

 
 
 
export const revalidate = 3600 // revalidate at most every hour
async function getData(slug: string  ) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}items/${slug}/images`,  { cache: 'no-store' } ) 
  if (!res.ok)    return false 
  return res.json()
}
 
export default async function PreviewPage(  { params: { slug } }: { params: { slug: string } }  ) {
  const data = await getData(slug)
  const urls = data as string[];
  


  return<div><Gallery urls={urls}></Gallery>
  

      </div>
 
    
}