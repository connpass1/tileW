import { storage } from "@/utils/db/firebaseAuth";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(
    request: NextRequest,
    { params }: { params: { col: string; id: string } },
) {
    const path =
        params.col === params.id ? params.col : `${params.col}/${params.id}`;
    const arr:string []=[] 
   
   const response= await listAll(ref(storage, path))
   const urls = await Promise.all(
    response.items.map((item) => getDownloadURL(item))
  );  
  return NextResponse.json(urls );
}
