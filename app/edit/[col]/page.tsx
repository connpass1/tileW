import { notFound } from 'next/navigation';
import { Key } from 'react';
import AddForm from './addForm';
async function getData(col: string  ) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${col}`,  { cache: 'no-store' }  ) 
  if (!res.ok) return false  
  return res.json()
}
 
export default async function EditItems({ params }: { params: { col: string  } }) {
  const data = await getData( params.col  )
 if(!data ) notFound();
  return < >  {data.map((item: any,key: Key | null | undefined)=><div  key={key}>
    {JSON.stringify(item)}
    </div>
     
  )} <div> <AddForm   /> </div>
  
  
   </ >
}

 
 