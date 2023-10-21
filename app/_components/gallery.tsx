
'use client'
import Image from "next/image"
import { useState } from "react"
import { BiChevronRight } from "react-icons/bi"
export default function Gallery({urls}:{urls:string[]}) {

const [state,setState]= useState(0)

   return  <div className="center flex-col gap-8"> 
     
     <Image
                        width={400}
                        height={400}
                        className="max-h-80 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                        src={urls[state]}
                        alt=""
                      />
    
 
 
<div  className="center gap-4 py-2 "> 
        {urls.map((url, key) => <div className=" duration-700 ease-in-out cursor-pointer"   data-carousel-item key={`x${key}`} onClick={()=>setState(key)}>
     
     <Image
                        width={120}
                        height={120}
                        className="max-h-20  w-full object-cover transition-transform duration-300 transform "
                        src={url}
                        alt=""
                      />
     
     
     </div>
     )}
        </div> 
</div> 
 
}