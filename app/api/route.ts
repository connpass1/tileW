import { NextResponse, type NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  
) {
  let payload = Date.now();
   
  return NextResponse.json({   payload });
}

export const dynamic = "force-dynamic";