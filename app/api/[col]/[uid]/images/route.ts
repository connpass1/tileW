 import { ColUidParamsType } from "@/app/_utils/models/types";
import { firebaseConfig } from "@/app/api/_config/firebase";
import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, listAll, ref } from "firebase/storage";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params: { col, uid } }: ColUidParamsType,
) { 
  const app = initializeApp(firebaseConfig); 
  const storage = getStorage(app);
  const response = await listAll( 
    ref(storage, col === uid ? col : `${col}/${uid}`)
  );
 
  const urls = await Promise.all(
    response.items.map((item) => getDownloadURL(item)),
    );
  console.log('jj',urls);
  return NextResponse.json(urls); 
 
}
