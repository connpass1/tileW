import { storage } from "@/app/_utils/firebaseAuth";
import { ColUidParamsType } from "@/app/_utils/models/types";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params: { col, uid } }: ColUidParamsType,
) { 
  const response = await listAll(
   
    ref(storage, col === uid ? col : `${col}/${uid}`)
  );
  const urls = await Promise.all(
    response.items.map((item) => getDownloadURL(item)),
  );
  return NextResponse.json(urls);
}
