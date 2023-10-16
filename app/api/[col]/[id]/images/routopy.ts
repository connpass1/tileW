import { storage } from "@/utils/db/firebaseAuth";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { col: string; id: string } },
) {
  const path =
    params.col === params.id ? params.col : `${params.col}/${params.id}`;
  const listRef = ref(storage, params.col);
  const items: any[] = [];
  const res = await listAll(listRef);
  res.items.map(async (it) => {
    const req = await getDownloadURL(ref(storage, it.fullPath));
    items.push(req);
  });
  return NextResponse.json(items);
}
