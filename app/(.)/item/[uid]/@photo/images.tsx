"use client" 
import NextImage from "next/legacy/image";
import { useState } from "react";
export default function Ups({ urls }: { urls: string[] }) { 
    const [state, setState] = useState(0)
    
    if(urls?.length) 
 return <>
 <div className="flex flex-col gap-4  bg-stone-700 w-full h-96 relative">
       <NextImage  
   src={ urls[state]}
   alt=""
    objectFit="cover" 
   quality="75" 
 
   sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw,(max-width:1024px) 30vw,(max-width:1280px) 35vw,25vw " 
   priority  
/>
</div>  
<div className="w-full   relative center gap-2 child:border-2   child:block child:p-2" > 
{urls.map((url,i)=> <div onClick={()=>setState(i)}
className={`${i===state?"dark:border-white border-primary":"border-transparent cursor-pointer"}`}  key={i}  >  
<NextImage  
   src={urls[i]}
   alt=""
   objectFit="cover" 
   quality="75"
   loading="lazy"
   width={120}
   height={90}  
    
 /> 
   </div>  
  )} 
 
 </div>
 </>  
  }   