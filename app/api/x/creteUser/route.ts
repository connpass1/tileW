 
import { auth } from "@/app/api/_config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
 
try{
 const login=await createUserWithEmailAndPassword(auth,"connpass22@mailinator.com","ffffff")

  return NextResponse.json(login);
}
catch (e) {
  return NextResponse.json(e);
} 
}

export const dynamic = "force-dynamic";
