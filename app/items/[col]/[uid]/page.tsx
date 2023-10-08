import { notFound } from 'next/navigation';
async function getData(col: string ,uid: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${col}/${uid}`,{ next: { revalidate: 3600 }} )
 
  if (!res.ok)    return false 
  return res.json()
}
 
export default async function Page({ params }: { params: { col: string ,uid: string} }) {
  const data = await getData( params.col  , params.uid )
 if(!data ) notFound();
  return  <>  {JSON.stringify(data)}</>
 
  }
  
  
 