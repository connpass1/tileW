import { firebaseConfig } from "@/app/_utils/firebaseAuth";
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
   const app = initializeApp(firebaseConfig); 
  const auth = getAuth(app);
try{
 const login=await createUserWithEmailAndPassword(auth,"connpass22@mailinator.com","ffffff")

  return NextResponse.json(login);
}
catch (e) {
  return NextResponse.json(e);
} 
}

export const dynamic = "force-dynamic";
