import { firestore } from '@/app/db/firebaseAuth';
import { IItem, Item } from '@/utils/models/item';
import { doc, getDoc } from 'firebase/firestore/lite';
import Link from 'next/link';
import AditForm from './editForm';

async function getData(col: string, uid: string) {
  
   
  const docRef = doc(firestore, `${col}/ ${uid}`);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) return new Item( docSnap.data()  as IItem )

  return new Item({ uid : uid} as IItem ) 
 
}
  

export default async function Page({ params }: { params: { col: string, uid: string } }) {
  
  const {col,uid}= params
  const data = await getData(col,uid)
  
  return <div className='center'>
     <AditForm   {  ...data}  /> 
     <Link href={`/items/${col}/${uid}`}>vew</Link>
     
     </div>
}

  