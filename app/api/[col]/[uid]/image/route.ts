 
import { ColUidParamsType } from "@/app/_utils/models/types";
import { firebaseConfig } from "@/app/api/_config/firebase";
import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { NextResponse, type NextRequest } from "next/server";
export async function GET(
  request: NextRequest,
  { params: { col, uid } }: ColUidParamsType,
) {
  const app = initializeApp(firebaseConfig); 
  const storage = getStorage(app); 
  const url = await getDownloadURL(ref(storage, `${col}/${uid}.jpeg`));
  return NextResponse.json(url);
}
