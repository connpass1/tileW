 
import { BreadCrumbLoader } from "@/app/_components/loader";
import getData, { timeout } from "@/app/_utils/data/getData";
import { ColUidParamsType } from "@/app/_utils/models/types";
export async function getItem(slug: string) { 
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}faker/item?c=${slug}`) 
  if (!res.ok)    return false
  return res.json()
}
export default async function  Title({
    params: {col},
}: ColUidParamsType) { 
  const data = await getItem(col)  
  return     <BreadCrumbLoader>{data?.title } </BreadCrumbLoader>  
 }