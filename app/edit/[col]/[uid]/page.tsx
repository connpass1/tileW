import Link from 'next/link';
import AditForm from './editForm';

async function getData(col: string ,uid: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${col}/${uid}`,  { cache: 'no-store' }  )
 
  if (!res.ok)    return false 
  return res.json()
}
 
 

export default async function Page({ params }: { params: { col: string, uid: string } }) {
  
  const {col,uid}= params
  const data = await getData( col  ,  uid )
  
  return <div className='center'>
     <AditForm  uid={ uid}  {  ... data}  /> 
     <Link href={`/items/${col}/${uid}`}>vew</Link>
     
     </div>
}

  