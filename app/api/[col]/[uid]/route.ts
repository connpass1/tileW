 
 
import { ColUidParamsType } from "@/app/_utils/models/types";
import { initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore } from "firebase/firestore/lite";

import { NextResponse, type NextRequest } from "next/server";
import { firebaseConfig } from "../../_config/firebase";

export async function GET(
  request: NextRequest,
  { params: { col, uid } }: ColUidParamsType,
) {
  const app = initializeApp(firebaseConfig); 
  const docRef = doc(getFirestore(app), `${col}/${uid}`);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists())
    return NextResponse.json({ col: col, uid: uid, ...docSnap.data() });
  return NextResponse.json({ message: "not found" }, { status: 404 });
}
 
