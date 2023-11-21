 
import { ColUidParamsType } from "@/app/api/_data/types";
import { sql } from "@vercel/postgres";
import { Metadata, ResolvingMetadata } from "next";
 
 
export async function getItem (uid:number) { 
  // revalidatePath('/')
     const  req = await sql`SELECT * from items where id =${uid};`  
     return req.rows[0]
     }
export async function generateMetadata(
  { params: { uid } }: ColUidParamsType,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const item = await getItem (Number.isInteger(parseInt(uid)) ? parseInt(uid):1);
  const meta: Metadata = {};
  meta.title = item?.title ?? "404";
  meta.description = item?.meta_description ?? ""; 
  return meta;
}
 


export default async function X({ params: { uid } }: ColUidParamsType) {
  const  item = await getItem (Number.isInteger(parseInt(uid)) ? parseInt(uid):1  ); 
    return    item?.name??"404" 
}