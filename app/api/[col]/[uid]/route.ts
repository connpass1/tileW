import { firestore } from "@/app/_utils/firebaseAuth";
import { ColUidParamsType } from "@/app/_utils/models/types";
import { doc, getDoc } from "firebase/firestore/lite";

import { NextResponse, type NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params: { col, uid } }: ColUidParamsType,
) {
  const docRef = doc(firestore, `${col}/${uid}`);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists())
    return NextResponse.json({ col: col, uid: uid, ...docSnap.data() });
  return NextResponse.json({ message: "not found" }, { status: 404 });
}
