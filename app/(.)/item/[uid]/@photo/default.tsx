import { getItem } from "@/app/_utils/data/getData";
import Ups from "./images";

 

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
 