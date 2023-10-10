import { Item } from '@/utils/models/item';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import AddForm from '../../edit/[col]/addForm';
async function getData(col: string  ) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${col}`,  { cache: 'no-store' }  ) 
  if (!res.ok) return false  
  return res.json()
}
 
export default async function EditItems({ params }: { params: { col: string  } }) {
  const data = await getData( params.col  )
 if(!data ) notFound();
 const items = data as Item []
 return <ul><li><AddForm/></li>  {items.map(it => <li key={it.uid}>
  <Link href={`/edit/items/${it.uid}`}> 
 <pre>{JSON.stringify(it )} </pre></Link>
  </li>)}  </ul>
  
  }

   

 
 