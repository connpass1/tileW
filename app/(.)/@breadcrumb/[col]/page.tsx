import { BreadCrumbLoader } from "@/app/_components/loader";
import getData from "@/app/_utils/data/getData";
import { ColUidParamsType } from "@/app/_utils/models/types";
export async function getItem(slug: string) { 
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}faker/item?c=${slug}`) 
    if (!res.ok)    return false
    return res.json()
  }
export default async function  BreadcrumbPageItem({
    params: { uid},
}: ColUidParamsType) { 
  const data = await getData(uid)  
 
  return <BreadCrumbLoader > 
      это  _ {uid}{ data?.title} 
      </BreadCrumbLoader> 
 }