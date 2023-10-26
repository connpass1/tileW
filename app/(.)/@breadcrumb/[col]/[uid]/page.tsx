import getData from "@/app/_utils/data/getData";
import { ColUidParamsType } from "@/app/_utils/models/types";
export default async function  BreadcrumbPageCol({
  params: { uid},
}: ColUidParamsType) { 
const data = await getData(uid)  
return   <> это n _ {uid}{ data?.title} </>  
}