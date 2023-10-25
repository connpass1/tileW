
import NextImage from "next/image";
import { notFound } from "next/navigation";
 export const revalidate = 36//00 // ra lidate a t most every hour

async function getData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}items/items/test`,
  );
  if (!res.ok) return {  images:[]};
  return res.json() ;
}

export default async function GalleryItemPage() {
  const data  = await getData();
  const images=data.images as string[]
  if (data.length === 0) notFound();

  return (
    <div className="flex flex-col gap-2"> 
      {images.map((url, k) => (
        <div className="bg-black/10 p-4" key={k}>
          <NextImage
            width={120}
            height={120}
            className=" filter    hover:contrast-200"
            src={url}
            alt=""
          />
        </div>
      ))} 
    </div>
  );
}
 