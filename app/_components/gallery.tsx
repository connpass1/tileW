/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
export default function Gallery({ urls }: { urls: string[] }) {
  const [state, setState] = useState(0);
 
  return  <>  <div className="relative "> 
      
        <img
         
          src={urls[state]}
          alt="Picture of the author"
         
       
          
       
      
        />
      </div>
      <div className="center   gap-2">
        {urls.map((url, key) => (
          <div
            key={key}
            className="center relative h-full w-24 cursor-pointer"
            onClick={() => setState(key)} 
          >
            <img
              src={url}
              alt=" "
              
     
              className="contrast-74  filter hover:contrast-150"
         
            />
          </div>
        ))}
      </div></>
   
}
