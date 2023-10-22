"use client";
import Image from "next/image";
import { useState } from "react";
export default function Gallery({ urls }: { urls: string[] }) {
  const [state, setState] = useState(0); 
  if (urls?.length === 0) return <p>no images</p>
  if (urls.includes("")) return <p>have empty</p>
  return (
    <div className="center flex-col gap-8">
      <Image
        width={400}
        height={400}
        className="w-full transform rounded-2xl object-cover transition-transform duration-300 group-hover:scale-105"
        src={urls[state]}
        alt=""
      />

      <div className="center gap-4 py-4 bor ">
        {urls.map((url, key) => (url  &&
          <div
            className="cursor-pointer duration-700 ease-in-out"
            data-carousel-item
            key={`x${key}`}
            onClick={() => setState(key)}
          >
            <Image
              width={120}
              height={120}
              className="max-h-20  w-full    filter    hover:contrast-200"
              src={url}
              alt=""
            />
          </div>
        ))} 
 
      </div>
    </div>
  );
}
