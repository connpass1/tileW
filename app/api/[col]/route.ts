 
 
import { ColUidParamsType } from "@/app/_utils/models/types";
import { initializeApp } from "firebase/app";
import { DocumentData, collection, getDocs, getFirestore } from "firebase/firestore/lite";
import { NextResponse, type NextRequest } from "next/server";
import { firebaseConfig } from "../_config/firebase";
export async function GET(
  request: NextRequest,
  { params: { col } }: ColUidParamsType,
) {
  const app = initializeApp(firebaseConfig); 
  const querySnapshot = await getDocs(collection(getFirestore(app), col));
  if (querySnapshot.empty) return NextResponse.json([]);
  const items: DocumentData[] = [];
  querySnapshot.forEach((document) => {
    document.id;
    items.push({ ...document.data(), uid: document.id });
  });
  return NextResponse.json(items);
}
