import { notFound } from 'next/navigation';
export const revalidate = 3600 // revalidate at most every hour
async function getData(col: string ,uid: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${col}/${uid}`,  { cache: 'no-store' } )
 
  if (!res.ok)    return false 
  return res.json()
}
 
export default async function Page({ params }: { params: { col: string ,uid: string} }) {
  const data = await getData( params.col  , params.uid )
 if(!data ) notFound();
  return  <>  {JSON.stringify(data)}</>
 
}
  
  
 