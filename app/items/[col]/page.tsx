import { Item } from '@/utils/models/item';
import Link from 'next/link';
import { notFound } from 'next/navigation';
export const revalidate = 3600 // revalidate at most every hour
async function getData(col: string  ) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${col}` ) 
  if (!res.ok) return false 
  
  return res.json()
}
 
export default async function Page({ params }: { params: { col: string  } }) {
  const data = await getData( params.col  )
  if (!Array.isArray(data)) notFound();
  
  const items = data as Item []
  return<>   <ul>  {items.map(it => <li key={it.uid}><Link href={`/items/items/${it.uid}`}>{it.title}</Link> </li>)}  </ul></>
   
   }
