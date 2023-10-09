
import { NextResponse, type NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { col: string } }
) {
  let payload = Date.now();
   
    payload = new Date().getTimezoneOffset();
  return NextResponse.json({  col: params. col, payload });
}

export const dynamic = "force-dynamic";