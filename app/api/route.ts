import { NextResponse, type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  return NextResponse.json({ time: Date.now() });
}

export const dynamic = "force-dynamic";
