import { ColUidParamsType } from "@/app/_utils/models/types";
import { NextResponse, type NextRequest } from "next/server";
  function timeout(ms: number | undefined) {
      return new Promise(resolve => setTimeout(resolve, ms));
  }
export async function GET(
  request: NextRequest,
  { params: {    col, uid} }: ColUidParamsType,
)   { 
      await timeout(3000);
 
     return NextResponse.json({ date: Date.now(),col:col,uid:uid,title:"титл"}); 
}

