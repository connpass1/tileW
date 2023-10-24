"use client";
import Image from "next/image";
import { useState } from "react";
export default function Gallery({ urls }: { urls: string[] }) {
  const [state, setState] = useState(0);
 
  return  < >  <div className="relative "> 
        <Image
          quality={75}
          src={urls[state]}
          alt="Picture of the author"
           layout="fill" // required
           objectFit="contain" // change to suit your needs 
          
          sizes="(max-width: 640px) 100vw"
          priority
        />
      </div>
      <div className="center   gap-2">
        {urls.map((url, key) => (
          <div
            key={key}
            className="center relative h-full w-24 cursor-pointer"
            onClick={() => setState(key)} 
          >
            <Image
              src={url}
              alt=" "
               layout="fill" // required
               objectFit="cover" // change to suit your needs
              className="contrast-74  filter hover:contrast-150"
              quality={50}
              sizes="(max-width: 120px) 20vw"
              loading="lazy"
            />
          </div>
        ))}
      </div>< />
   
}
