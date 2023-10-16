
import Image from "next/image"
export const revalidate = 3600 // revalidate at most every hour
async function getData(col: string ,uid: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${col}/${uid}/images`,  { cache: 'no-store' } ) 
    if (!res.ok) return false  
  return res.json()
}
 
export default async function Images({  col ,uid   }:{ col: string ,uid: string}) {
  const data = await getData( col,  uid)
  if(!Array.isArray(data)) if (!data) return <p>ups</p>; 
    return  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 col-span-2">{ 
        (data as string[]).map((src) =><div key={src}   ><figure className="max-w-lg" >
        <Image className="h-auto max-w-full rounded-lg " width={200} height={200} src={src} alt="image description"/>
        <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">Image caption</figcaption>
      </figure> </div>                  
       )}
     
    </div>
     
    
 
}