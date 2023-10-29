import { ColUidParamsType } from "@/app/_utils/models/types";
import { NextResponse, type NextRequest } from "next/server";
 
export async function GET(
  request: NextRequest,
  { params: { col, uid} }: ColUidParamsType,
)   {  
  return NextResponse.json({
    date: Date.now(), col: col, uid: uid, title: "test титл", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    ,rate:4.5 
    ,images: [ 
      "https://firebasestorage.googleapis.com/v0/b/nextjs-43ece.appspot.com/o/items%2Fim33.jpeg?alt=media&token=418a756e-780a-4af5-935a-ce03412d8035"
      ,"https://firebasestorage.googleapis.com/v0/b/nextjs-43ece.appspot.com/o/items%2Fanada-23712.jpg?alt=media&token=3be7abcd-9e6c-4ed3-967b-5e09eff375d4"]
  }); 
}

