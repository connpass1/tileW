"use client"
import { IItem } from '@/app/api/_data/types';
import NextImage from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function Gallery({item }:{  item:IItem}) { 
    const router = useRouter()
     const [state,setState]=useState(1)
    const handle = () => router.push(`/card/${item.uid}/${state}`)  
    return<div className="w-full  h-full  flex flex-col">
    <div className="relative w-full  aspect-video   shrink-0"> 
    <NextImage
     src={item.images[state]}
      alt={item.title}
     layout="fill"
     sizes="(max-width: 768px) 100vw,
   (max-width: 1024px) 50vw,
    33vw"
     priority
     objectFit="cover"
      placeholder="blur"
      blurDataURL="/blur.png"
      /> 
        </div>
        <div className='  w-full h-full flex gap-2 justify-center py-4  '>
            {item.images.map((it, k)=><button key={k} className={`  relative h-full aspect-video   focus:ring-4`  } 
             onClick={()=> setState( k)}>
            <NextImage
     src={it}
      alt={item.title}
     layout="fill" 
     objectFit="cover"
      placeholder="blur"
      blurDataURL="/blur.png"
      />   

           </button>)}
    </div>
    
    </div>
    }
  