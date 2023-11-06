import { getItem } from "@/app/api/_data/fetch";
import { IItem } from "@/app/api/_data/types";
import { IItemProps } from "../@card/page";
import Gallery from "./gallery";

 
export default async function X({ params: { uid }  }:IItemProps) {
  const data = await getItem(uid); 
  const item =  data as IItem 
 

  return<Gallery item={item} /> 
  
//   <div className="relative  h-full   text-slate-100 md:col-span-4  ">
//   <NextImage
//     src={item.images[0]}
//     alt={item.title}
//     layout="fill"
//     sizes="(max-width: 768px) 100vw,
//   (max-width: 1024px) 50vw,
//   33vw"
//     priority
//     objectFit="cover"
//     placeholder="blur"
//     blurDataURL="/blur.png"
//   /> 
// </div>
    
  }