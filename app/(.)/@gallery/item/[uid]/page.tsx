import { ImageLoader } from "@/app/_components/loader";
import getData from "@/app/_utils/data/getData";
import { ColUidParamsType } from "@/app/_utils/models/types";
import NextImage from "next/image";
export default async function   GalleryPageItem({
    params: { uid},
}: ColUidParamsType) { 
  const data = await getData(uid)  
  return  <ImageLoader>  
<NextImage   src= { data?.images[0]}   height={400}   loading="eager" style= {{ width:'auto' , height:'100%'  }}  width ={600} alt={""}></NextImage>

     { data?.images[0]}  
     
     </ImageLoader>
     
 }