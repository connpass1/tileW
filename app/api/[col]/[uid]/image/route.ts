import { storage } from "@/app/_utils/firebaseAuth";
import { ColUidParamsType } from "@/app/_utils/models/types";
import { getDownloadURL, ref } from "firebase/storage";
import { NextResponse, type NextRequest } from "next/server";
export async function GET(
  request: NextRequest,
  { params: {    col, uid} }: ColUidParamsType,
)   {
     //  const url= await getDownloadURL(ref(storage, '/im2.jpeg')) 
  const url = await getDownloadURL(ref(storage, `${ col}/${ uid}.jpeg`));
     return NextResponse.json(url); 
}

