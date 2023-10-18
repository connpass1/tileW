
import Image from "next/image";
export const revalidate = 3600 // revalidate at most every hour
async function getData(col: string, uid: string) {
  await new Promise<void>(resolve => {
    setTimeout(() => {
         
        resolve()
    }, 3000)

});


  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${col}/${uid}/images`,  { cache: 'no-store' } ) 
    if (!res.ok) return false  
  return res.json()
}
 
export default async function Page({ params }: { params: { col: string ,uid: string} }){ 
  const data = await getData(  params.col, params.uid)
  if(!Array.isArray(data)) if (!data) return <p>ups</p>; 
    return  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 col-span-2">{ 
        (data as string[]).map((src) =><div key={src}   ><figure className="max-w-lg" >
        <Image className="h-auto max-w-full rounded-lg " width={200} height={200} src={src} priority={false} placeholder ="blur"
        
       blurDataURL= "data:image/jpeg;base64,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"
        
        alt="image description"/>
        <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">Image caption</figcaption>
      </figure> </div>                  
       )}
     
    </div>
     
    
 
}