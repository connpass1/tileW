import { storage } from "@/utils/db/firebaseAuth";
import { getDownloadURL, ref } from "firebase/storage";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { col: string; id: string } },
) {
     //  const url= await getDownloadURL(ref(storage, '/im2.jpeg')) 
  const url = await getDownloadURL(ref(storage, `${params.col}/${params.id}.jpeg`));
     return NextResponse.json(url); 
}

