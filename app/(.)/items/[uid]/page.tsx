import { notFound } from "next/navigation";
//export const revalidate = 3600 // ra lidate a t most every hour
import NextImage from "next/image";

async function getData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}items/items/images`,
  );
  if (!res.ok) return [];
  return res.json();
}

export default async function GalleryItemPage() {
  const data: string[] = await getData();

  if (data.length === 0) notFound();

  return (
    <div className="flex flex-col gap-2">
     
     
    </div>
  );
}
