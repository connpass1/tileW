import { ImageLoader } from "@/app/_components/loader";
import getData from "@/app/_utils/data/getData";
import NextImage from "next/image";
import Link from "next/link";
type Props = {
  params: {uid:string},
  searchParams: {  im:   string   | undefined },
}
export default async function GalleryPageItem({
  params: { uid },searchParams: {  im    },
}: Props) {
  const data = await getData(uid);  

 

  const urls=data.images  as string[]
  const index:number =im?+im:0
  const mainUrl =  urls[index]?? urls[0] 
  
  return (
  <div className="w-full h-[280px]   sm:col-span-2  sm:h-[340px]  row-start-3  md:h-[280px]  lg:h-[280px] 2xl:h-[340px] relative">
    <ImageLoader>  
   <NextImage  
        src={mainUrl}
        alt=""
        objectFit="cover" 
        quality="75" 
        fill  
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw,(max-width:1024px) 30vw,(max-width:1280px) 35vw,25vw " 
        priority 
      
      />
    <div className="w-full   center absolute bottom-[-100px] z-index:2 flex gap-2 child:border-2   child:block child:p-2" >
    {urls.map((url,i)=> <Link  href={{ pathname: `/item/${uid}`, query: {im: i } }} 
     className={`${i===index?"dark:border-white border-primary":"border-transparent"}`}  key={i}  >  
    <NextImage  
        src={urls[i]}
        alt=""
        objectFit="cover" 
        quality="75"
        loading="lazy"
        width={120}
        height={90}  
        blurDataURL=""
      /> 
        </Link>  
       )} 
       </div>
    </ImageLoader>
  </div>
  );
}
 