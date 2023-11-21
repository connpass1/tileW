 
 
import { getItem } from "@/app/api/_data/fetch";
import { ColUidParamsType } from "@/app/api/_data/types";
import { sql } from "@vercel/postgres";
import { Metadata, ResolvingMetadata } from "next";
import { revalidatePath } from "next/cache";
import Link from "next/link";
 
 
export async function generateMetadata(
  { params: { uid } }: ColUidParamsType,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const item = await getItem(uid);
  const meta: Metadata = {};
  meta.title = item?.title ?? "404";
  meta.description = item?.meta_description ?? "";
  if (item?.images.length) meta.openGraph = { images: item.images };
  return meta;
}
 
export async function selectAll(uid:number) { 
   revalidatePath('/')
    const  req = await sql`SELECT id, name,render,sort from items where parent_id =${uid}  ORDER BY sort  DESC;`  
    return req 
    }

export default async function X({ params: { uid } }: ColUidParamsType) {
  const { rows } = await selectAll(Number.isInteger(parseInt(uid)) ? parseInt(uid):1  );
  
 
    return <div>   { rows.map((r, k) => <p key={k}><Link href={`/${r.id}`}> {r.name } </Link>  {r.render }</p>) }</div>
}