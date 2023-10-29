 
import { BreadCrumbLoader } from "@/app/_components/loader";
import { getItem } from "@/app/_utils/data/getData";
import { ColUidParamsType } from "@/app/_utils/models/types";
 
export default async function  BreadcrumbPageItem({
    params: { uid},
}: ColUidParamsType) { 
  const data = await getItem(uid)  
 
  return <BreadCrumbLoader > 
       { data?.short_name} 
      </BreadCrumbLoader> 
 }