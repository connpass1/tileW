import Ups from "./images";

export async function getItem(slug: string) { 
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}faker/item?c=${slug}`) 
  if (!res.ok)    return false
  return res.json()
}

type Props = {
  params: {uid:string},
  searchParams: {  im:   string   | undefined },
}
export default async function GalleryPageItem({
  params: { uid },searchParams: {  im    },
}: Props) {
  const data = await getItem(uid); 
  const urls=(data.images  as string[]).filter((x)=>x?.length>10)
 
  
  return (
    <div className="flex flex-col gap-4 h-96 justify-around" >
      
     
 
      <Ups urls={urls} ></Ups>
      
       
 </div>
  );
}
 