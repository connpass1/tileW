 
import { Item } from '@/app/_utils/models/item';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react';
 
async function getData(col: string  ) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${col}`,  { cache: 'no-store' }  ) 
  if (!res.ok) return false  
  return res.json()
}
 
export default async function ImagesPage({ params }: { params: { col: string  } }) {
  const data = await getData( params.col  )
 if(!data ) notFound();
 const items = data as Item []
 return <div className='grid grid-cols-2'> {items.map(it => <React.Fragment key={it.uid}>
   {it.preview ? <Image src={it.preview} alt={it.title} width={80} height={80}/> : "?"} 
   <Link href={`/edit/items/${it.uid}`}>   {it.title}   </Link>

 </React.Fragment> 
) }
      
   </div >
}