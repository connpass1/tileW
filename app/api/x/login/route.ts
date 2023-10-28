import { auth } from "@/app/api/_config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { NextResponse, type NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  //const body = await request.text();

  
  try {
    const login = await signInWithEmailAndPassword(auth, "connpass22@mailinator.com", "ffffff") 
    return NextResponse.json( login );
  }
  catch (e) {
    return NextResponse.json(e);
  }
 
}
export const dynamic = "force-dynamic";
 