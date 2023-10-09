'use client';
import { firestore } from '@/app/db/firebaseAuth';
import { doc, getDoc } from 'firebase/firestore/lite';
import Link from 'next/link';
import { useEffect, useState } from 'react'; 
export default   function Page({ params }: { params: { col: string, uid: string } }) {
  const [state,setState] =  useState   ("" )  ;
  useEffect(() => {
    const docRef = doc(firestore, `${params.col}/${params.uid}`);
    getDoc(docRef).then(snapshot => {
      if (snapshot.exists())
        setState(JSON.stringify(snapshot.data()))
      else setState("no data")
    }).catch(e=>setState("error"))  }  , [])
  

  const {col,uid}= params 
  return <div className='center'>
      
     <Link href={`/items/${col}/${uid}`}>vew</Link>
     {state }
     </div>
}

  