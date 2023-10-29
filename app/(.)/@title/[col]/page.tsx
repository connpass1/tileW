 
import { BreadCrumbLoader } from "@/app/_components/loader";
import getData, { timeout } from "@/app/_utils/data/getData";
import { ColUidParamsType } from "@/app/_utils/models/types";
 
export default async function  Title({
    params: {col},
}: ColUidParamsType) { 
  const data = await getData(col)  
  return     <BreadCrumbLoader>{data?.title } </BreadCrumbLoader>  
 }