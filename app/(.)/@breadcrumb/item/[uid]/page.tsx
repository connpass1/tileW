 
import { BreadCrumbLoader } from "@/app/_components/loader";
import getData, { timeout } from "@/app/_utils/data/getData";
import { ColUidParamsType } from "@/app/_utils/models/types";
 
export default async function  BreadcrumbPageItem({
    params: { uid},
}: ColUidParamsType) { 
  const data = await getData(uid)  
  await timeout(3000)
  return < > 
    <> это  _ {uid}{ data?.title} </> 
      </ > 
 }