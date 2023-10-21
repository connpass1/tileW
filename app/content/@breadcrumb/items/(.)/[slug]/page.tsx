 
import { notFound } from 'next/navigation';
 
export const revalidate = 3600 // revalidate at most every hour
async function getData(slug: string  ) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}items/${slug}`,  { cache: 'no-store' } ) 
  if (!res.ok)    return false 
  return res.json()
}
 
export default async function Page(  { params: { slug } }: { params: { slug: string } }  ) {
  const data = await getData(  slug)
  
  if (!data) notFound();
  const {title} = data;
  
  return  title  
    
}