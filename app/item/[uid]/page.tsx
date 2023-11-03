import Breadcrumbs, { BreadcrumbsLink } from "@/app/_layout/content/breadcrumbs";
import Gallery from "@/app/_layout/content/gallery";
import Rate from "@/app/_layout/content/rate";
import Title from "@/app/_layout/content/title";
import { getItem } from "@/app/api/_data/fetch";
import { ColUidParamsType } from "@/app/api/_data/types";
 
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
export async function generateMetadata(
  { params: { uid } }: ColUidParamsType,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const item = await getItem(uid);
  const meta: Metadata = {};
  meta.title = item?.title ?? "404";
  meta.description = item?.meta_description ?? "";
  if (item?.images.length) meta.openGraph = { images: item.images };
  return meta;
}
export default async function  X({
    params: {uid},
}: ColUidParamsType) { 
  const data = await getItem(uid) 
  
   if (uid==="3") notFound()
  // return <LoadingUid />
  return <> 
    <Breadcrumbs><BreadcrumbsLink link={[data.parent_name,data.parent_slug]} />   <span >{data.name }</span></Breadcrumbs>
    <Title text={data.title} />  
    <main >
      <Rate/>
      <Gallery urls={data.images} /> 
      <div className="col-span-full row-start-3 lg:col-span-3  lg:row-start-2">{data.quantity} {data.price}</div>
      <div className="col-span-full row-start-5">{data.description} </div>
    {/* <div className="col-span-full row-start-6"> 
        {JSON.stringify(data)}   </div> */}
        </main>   
   
  </>
 }