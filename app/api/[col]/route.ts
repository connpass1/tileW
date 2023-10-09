import { firestore } from '@/app/db/firebaseAuth';
import { DocumentData, collection, getDocs } from 'firebase/firestore/lite';
import { NextResponse, type NextRequest } from "next/server";
export async function GET(
  request: NextRequest,
  { params }: { params: { col: string } }
) {
  const querySnapshot = await getDocs(collection(firestore, params.col));
  if (querySnapshot.empty) return NextResponse.json([])
  const items: DocumentData[] = [];
  querySnapshot.forEach(document => {
    document.id
    items.push({ ...document.data(), uid: document.id })
  })
  return NextResponse.json(items)
}


