import { sql } from "@vercel/postgres";
import Link from "next/link";
export async function select ( ) { 
 // revalidatePath('/')
    const  req = await sql`SELECT id, name,render,sort from items where parent_id =1 ORDER BY sort  DESC;`  
    return req 
    }

export default async function X( ) {
  const { rows } = await select ( ); 
    return <div>   { rows.map((r, k) => <p key={k}><Link href={`/admin/editItem/${r.id}`}> {r.name } </Link> {r.render }</p>) }</div>
}