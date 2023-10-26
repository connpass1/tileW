import { ColUidParamsType } from "@/app/_utils/models/types";
import { NextResponse, type NextRequest } from "next/server";
 
export async function GET(
  request: NextRequest,
  { params: { col, uid} }: ColUidParamsType,
)   { 
  
     return NextResponse.json({ date: Date.now(),col:col,uid:uid,title:"титл",images: ["https://firebasestorage.googleapis.com/v0/b/nextjs-43ece.appspot.com/o/items%2Fanada-23712.jpg?alt=media&token=3be7abcd-9e6c-4ed3-967b-5e09eff375d4","https://firebasestorage.googleapis.com/v0/b/nextjs-43ece.appspot.com/o/items%2Fim33.jpeg?alt=media&token=418a756e-780a-4af5-935a-ce03412d8035"] }); 
}

