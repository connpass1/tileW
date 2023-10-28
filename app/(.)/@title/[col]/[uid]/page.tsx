 
 import { BreadCrumbLoader } from "@/app/_components/loader";
import getData, { timeout } from "@/app/_utils/data/getData";
import { ColUidParamsType } from "@/app/_utils/models/types";
 
export default async function  Title({
    params: {uid},
}: ColUidParamsType) { 
  const data = await getData(uid)  
  return    data?.title  
     
     
 }