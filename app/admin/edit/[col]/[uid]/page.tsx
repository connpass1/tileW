 
import { firestore } from '@/app/_utils/firebaseAuth';
import { IItem, Item } from '@/app/_utils/models/item';
import { ColUidParamsType } from '@/app/_utils/models/types';
 
import { doc, getDoc } from 'firebase/firestore/lite';
import Link from 'next/link';
import AditForm from './editForm';

async function getData(col: string, uid: string) { 
  const docRef = doc(firestore, `${col}/${uid}`);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) return new Item( docSnap.data()  as IItem ) 
  return new Item({ uid : uid} as IItem )  
}
 type  ColUidType={ params: { col: string, uid: string }}

export default async function Page( { params: { col,uid }}:ColUidParamsType  ) {  
  const data = await getData(col,uid) 
  return <div className='center flex-col gap-2'>
     <AditForm   {  ...data}  /> 
     <Link href={`/items/${col}/${uid}`}>vew</Link>
     
     </div>
}

  