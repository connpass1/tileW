 
import { NextResponse, type NextRequest } from "next/server";
import { ColUidParamsType } from "../../_data/types";

export async function GET(
  request: NextRequest,
  { params: { col } }: ColUidParamsType
) {
  return NextResponse.json("ok");
}
