 
import { NextResponse, type NextRequest } from "next/server";
import { auth } from "../../_config/firebase";
export async function POST(request: NextRequest) {

  const body = await request.text(); 
  return NextResponse.json(  auth.currentUser );
}

export const dynamic = "force-dynamic";
 
 
