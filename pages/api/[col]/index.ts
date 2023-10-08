import { firestore } from '@/app/db/firebaseAuth';
import { DocumentData, collection, getDocs } from 'firebase/firestore/lite';
 
import { NextApiRequest, NextApiResponse } from 'next';
 
 
export default async function products( req: NextApiRequest,
  res: NextApiResponse ) {
  const query = req.query;
  const {col } = query;
  const querySnapshot = await getDocs(collection(firestore, col as string));
 
  const items: DocumentData[] = [];
  querySnapshot.forEach(document => {document.id
      items.push({ ...document.data(),uid:document.id  })
  }) 
      return res.status(200).json(items)
    
 
}

 