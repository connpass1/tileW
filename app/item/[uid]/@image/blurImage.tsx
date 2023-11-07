"use client";
import NextImage from "next/image";
import { useEffect, useState } from "react";
export default function BlurImage({
  src,
  alt = "",
  priority = false,
    sizes,
    onLoading 
}: {
  src: string;
  alt?: string;
  priority?: boolean;
        sizes: string;
        onLoading?:    () => void |undefined
}) {
  const [load, setLoad] = useState(false);
  useEffect(()=> { setLoad(false)},[ src])
    function onLoadingComplete(img: HTMLImageElement): void {
        setLoad(true)
        if(onLoading!==undefined)onLoading()
    }

  return (
    <NextImage
      src={src}
      alt={alt}
      layout="fill"
          sizes={sizes}
          className={`bg-slate-400 transition duration-200 ${
            load ? 'grayscale-100 bg-slate-400 blur-0' : 'grayscale-20 blur-2xl'
          }`}
      priority={priority}
      style={{objectFit:"cover"}}
      placeholder="blur"
      blurDataURL="/blur.png"
      onLoadingComplete={ onLoadingComplete}
    />
  );
}
