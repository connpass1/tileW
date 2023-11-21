import { ColUidParamsType } from "@/app/api/_data/types";
import { sql } from "@vercel/postgres";
import Link from "next/link";
export async function getSelection ( uid: string | number   ) {  
    const  req = await sql`SELECT id, name,render,sort from items where parent_id =${uid} ORDER BY sort  DESC;`  
    return req 
    }

export default async function X({ params: { uid } }: ColUidParamsType ) {
  const { rows } = await getSelection ( uid ); 
    return <div>   { rows.map((r, k) => <p key={k}><Link href={`/admin/editItem/${r.id}`}> {r.name } </Link> {r.render }</p>) }</div>
   
}