import Image from "next/image";
import { notFound } from "next/navigation";
export const revalidate = 3600 // revalidate at most every hour
async function getData( ) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}items/items/images`  ) 
    if (!res.ok)    return [ ] 
    return res.json()
  }
   
  export default async function GalleryItemPage() {
    const data:string[] = await getData( )
    if (data.length === 0) notFound();  
    
    return <div className="flex flex-col gap-2"> {data.map((url,k) => <div className="bg-black/10 p-4" key={k} > <Image
    width={120}
    height={120}
    className=" filter    hover:contrast-200"
    src={url}
    alt=""
  />
   </div> )} </div>  
         
  }