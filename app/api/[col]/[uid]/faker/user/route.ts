 
import { NextResponse, type NextRequest } from "next/server";
import { user } from '../_utils/fakes';
function getRandomInt(max:number) {
    return Math.floor(Math.random() * max);
  }
export async function GET(request: NextRequest) {
 
    return NextResponse.json(user( ) );
}
