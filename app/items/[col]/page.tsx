import { Item } from '@/utils/models/item';
import Link from 'next/link';
import { notFound } from 'next/navigation';
async function getData(col: string  ) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${col}`,{ next: { revalidate: 20 }} ) 
  if (!res.ok) return false  
  return res.json()
}
 
export default async function Page({ params }: { params: { col: string  } }) {
  const data = await getData( params.col  )
  if (!data) notFound();
  
  const items = data as Item []
  return <ul>  {items.map(it => <li key={it.uid}><Link href={`/items/items/${it.uid}`}>{it.title}</Link> </li>)}  </ul>
   
   }
