import { getItem } from "@/app/api/_data/fetch";
import { IItem } from "@/app/api/_data/types";
import NextImage from "next/legacy/image";
import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";
import { IItemProps } from "../@card/page";

 
export default async function X({ params: { uid }, searchParams: { q = "1",im = "0" }  }:IItemProps) {
  const data = await getItem(uid); 
  const item =  data as IItem 
  const path = { pathname: `/item/${uid}`}
  const last = item.images.length - 1 
   const index =Math.min(last,Math.max(0,parseInt(im)))   ;

  return       <div className="relative  h-full   text-slate-100 md:col-span-4  ">
  <NextImage
    src={item.images[index]}
    alt={item.title}
    layout="fill"
    sizes="(max-width: 768px) 100vw,
  (max-width: 1024px) 50vw,
  33vw"
    priority
    objectFit="cover"
    placeholder="blur"
    blurDataURL="/blur.png"
  />{last>0 &&<>
         <Link href={{...path, query: { im:index-1,q :q} }} 
          className= {`${index>0?"img_btn_active":"img_btn_disabled"} left-0`} 
        >
          <BiChevronRight className=" rotate-180  " /> 
          <span className="sr-only">⬅</span>
        </Link> 
        <Link href={{ ...path , query: { im:index+1,q :q } }} 
         className= {`${index< last?"img_btn_active":"img_btn_disabled"}  right-0`} 
         
        >
          <BiChevronRight />
          <span className="sr-only"> ➡</span>
      </Link>
      </>
        }
</div>
    
  }