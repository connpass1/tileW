 
import { NextResponse, type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
 
  return NextResponse.json("item");
}
