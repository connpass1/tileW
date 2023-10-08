 
import { firestore } from '@/app/db/firebaseAuth';
import { doc, getDoc } from 'firebase/firestore/lite';
import { NextApiRequest, NextApiResponse } from 'next';
 
 
  
export default async function products( req: NextApiRequest,
  res: NextApiResponse ) {
  const query = req.query;
  const {col, uid } = query;
  const docRef = doc(firestore,`${col}/ ${uid}` );
    const docSnap = await getDoc(docRef );
    if (docSnap.exists()) {
      return res.status(200).json({time: Date.now(),...docSnap.data()})
    } else {  
      return res.status(404).json({time: Date.now(),message:"not found"})
    }
  return res.status(500).json({time: Date.now(),message:"fb error" })
 
}