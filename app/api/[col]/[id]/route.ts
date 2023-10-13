import { firestore } from '@/utils/db/firebaseAuth';
import { doc, getDoc } from 'firebase/firestore/lite';
  
import { NextResponse, type NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { col: string ,id:string} }
) {

  const {col,id}=params
  const docRef = doc(firestore, `${col}/${id}`);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists())  
    return  NextResponse.json({col:col,uid:id,...docSnap.data()})
  
    return NextResponse.json({
      message:"not found"
    }, {
      status: 404,
    })  
  }
  
 



