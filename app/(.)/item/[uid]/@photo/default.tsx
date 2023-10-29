import { ImageLoader } from "@/app/_components/loader";
 
import NextImage from "next/image";
import Link from "next/link";

export async function getItem(slug: string) { 
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}faker/item?c=${slug}`) 
  if (!res.ok)    return false
  return res.json()
}

type Props = {
  params: {uid:string},
  searchParams: {  im:   string   | undefined },
}
export default async function GalleryPageItem({
  params: { uid },searchParams: {  im    },
}: Props) {
  const data = await getItem(uid); 
  const urls=(data.images  as string[]).filter((x)=>x?.length>10)
  const index:number =im?+im:0
  const mainUrl =  urls[index]?? urls[0] 
  
  return (
    <div className="flex flex-col gap-4">
       <div className="flex flex-col gap-4  bg-stone-700 w-full h-96 relative">
    <ImageLoader> 
    <NextImage  
   src={mainUrl}
   alt=""
   style={{objectFit:"cover"}}
   quality="75" 
   fill  
   sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw,(max-width:1024px) 30vw,(max-width:1280px) 35vw,25vw " 
   priority  
        />
      </ImageLoader></div>
      <div className="w-full   relative center gap-2 child:border-2   child:block child:p-2" >    
      <ImageLoader>     

{urls.map((url,i)=> <Link  href={{ pathname: `/item/${uid}`, query: {im: i } }} 
className={`${i===index?"dark:border-white border-primary":"border-transparent"}`}  key={i}  >  
<NextImage  
   src={urls[i]}
   alt=""
   style={{objectFit:"cover"}} 
   quality="75"
   loading="lazy"
   width={120}
   height={90}  
   blurDataURL=""
 /> 
   </Link>  
  )} 
 
 </ImageLoader> </div>
 </div>
  );
}
 