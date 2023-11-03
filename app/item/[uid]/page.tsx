import Card from "@/app/_components/card";
import Rate from "@/app/_components/rate";
import Breadcrumbs, {
  BreadcrumbsLink,
} from "@/app/_layout/content/breadcrumbs";
import Title from "@/app/_layout/content/title";
import { getItem } from "@/app/api/_data/fetch";
import { ColUidParamsType } from "@/app/api/_data/types";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { IItem } from "../../api/_data/types";
import LoadingUid from "./loading";
 
export async function generateMetadata(
  { params: { uid } }: ColUidParamsType,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const item = await getItem(uid);
  const meta: Metadata = {};
  meta.title = item?.title ?? "404";
  meta.description = item?.meta_description ?? "";
  if (item?.images.length) meta.openGraph = { images: item.images };
  return meta;
}
export default async function X({ params: { uid } }: ColUidParamsType) {
  const data = await getItem(uid);
  if (uid === "3") notFound();
  if (uid === "6") return <LoadingUid />;
  const item: IItem = data as IItem;
  return (
    <>
      <Breadcrumbs>
        {item.parents?.map((it) => (
          <BreadcrumbsLink key={it.uid} link={[`/item/${it.uid}`, it.name]} />
        ))}

        <span>{item.name}</span>
      </Breadcrumbs>
      <Title text={item.title} />
      <main>
        <Rate rate={item.rate} />
         <Card item={item}/>
         <div className="col-start-[-3] col-span-3 row-start-1 self-end"> 
       {item.quantity===0?"нет в наличии" :"в наличии много" }  
    </div> 
        <div className="col-span-full row-start-5">{item.description} </div>
        {  <div className="col-span-full row-start-6 flex flex-auto"> 
        
        {item.tags.split(" ").map((tag, key) => <span key="key" className="bg-pink-100 text-pink-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-pink-400 border border-pink-400">
         {tag}</span>)}</div> }
      </main>
    </>
  );
}
