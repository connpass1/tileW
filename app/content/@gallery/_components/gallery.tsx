"use client";
import Image from "next/image";
import { useState } from "react";
export default function Gallery({ urls }: { urls: string[] }) {
  const [state, setState] = useState(0); 
  if (urls?.length === 0) return  <div className="center "> <svg className="w-1/4  text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
  <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z"/>
</svg>
    </div>
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