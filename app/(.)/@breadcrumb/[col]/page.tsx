import { BreadCrumbLoader } from "@/app/_components/loader";
 
import { getItem } from "@/app/_utils/data/getData";
import { ColUidParamsType } from "@/app/_utils/models/types";
export default async function  BreadcrumbPageItem({
    params: { col},
}: ColUidParamsType) { 
  const data = await getItem( col)  
 
  return <BreadCrumbLoader > 
      это  _ { col}{ data?.title} 
      </BreadCrumbLoader> 
 }