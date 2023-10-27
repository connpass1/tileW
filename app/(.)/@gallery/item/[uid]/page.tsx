import { ImageLoader } from "@/app/_components/loader";
import getData from "@/app/_utils/data/getData";
import { ColUidParamsType } from "@/app/_utils/models/types";
import NextImage from "next/image";
export default async function GalleryPageItem({
  params: { uid },
}: ColUidParamsType) {
  const data = await getData(uid); 
  return (
    <ImageLoader> 
   <NextImage  
        src={data?.images[0]}
        alt="Picture of the author" 
        width={256}
        height={144} 
        style={{
          objectFit: 'contain',
        }}
        priority 
        loading = 'eager'
      />
    
    </ImageLoader>
  );
}
