import { firestore } from "@/app/_utils/firebaseAuth";
import { ColUidParamsType } from "@/app/_utils/models/types";
import { DocumentData, collection, getDocs } from "firebase/firestore/lite";
import { NextResponse, type NextRequest } from "next/server";
export async function GET(
  request: NextRequest,
  { params: { col } }: ColUidParamsType,
) {
  const querySnapshot = await getDocs(collection(firestore, col));
  if (querySnapshot.empty) return NextResponse.json([]);
  const items: DocumentData[] = [];
  querySnapshot.forEach((document) => {
    document.id;
    items.push({ ...document.data(), uid: document.id });
  });
  return NextResponse.json(items);
}
