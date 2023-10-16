import Preview from '@/components/elements/preview';
import { notFound } from 'next/navigation';
import { BiSolidStar } from 'react-icons/bi';
import Images from './images';
export const revalidate = 3600 // revalidate at most every hour
async function getData(col: string ,uid: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${col}/${uid}`,  { cache: 'no-store' } )
 
  if (!res.ok)    return false 
  return res.json()
}
 
export default async function Page({ params }: { params: { col: string ,uid: string} }) {
  const data = await getData(params.col, params.uid)
  
  if (!data) notFound();
  const {preview,quantity,rate,price,created,description,title,updated} = data       ;
  data
  return <div className='grid grid-cols-2'>
    <Images col={params.col} uid={ params.uid}/>
    <Preview url={preview} />
    <div >
    title {title} 
    </div >
    <div >
    quantity {quantity} 
    </div >
    <div className="flex  gap-2 text-4xl text-yellow-500 cursor-pointer " >
        {[0, 1, 2, 3, 4].map( x =>  <BiSolidStar key={x} className= {rate>x? "text-yellow-500":"text-yellow-100"}  /> ) }
    </div>
   <div>
   price {price} 
    </div >
    <div >
    description {description} 
    </div >
   
    <div>{created?.seconds}</div>
    <div>{updated?.seconds}</div>  
  </div>
 
}
  
  
 