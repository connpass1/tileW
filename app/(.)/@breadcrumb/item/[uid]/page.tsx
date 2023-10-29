 
import { BreadCrumbLoader } from "@/app/_components/loader";
import getData from "@/app/_utils/data/getData";
import { ColUidParamsType } from "@/app/_utils/models/types";
 
export default async function  BreadcrumbPageItem({
    params: { uid},
}: ColUidParamsType) { 
  const data = await getData(uid)  
 
  return <BreadCrumbLoader > 
       { data?.title} 
      </BreadCrumbLoader> 
 }