
import NextImage from 'next/legacy/image';
import { BsCardImage } from "react-icons/bs";
type  Type ={ urls: string[]|undefined }
export default function Gallery({urls }: Type) {  
    return  <div className="col-span-full   lg:col-span-3  h-80 lg:h-144 relative row-start-2"> 
       {!urls &&<BsCardImage className="w-full h-full" />  }
            { urls &&<NextImage src={urls[0]} alt={''} layout="fill"
      sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            priority 
            objectFit='contain' 
            placeholder='blur'
            blurDataURL='/blur.png'
              /> } 
    </div>  
      
 }