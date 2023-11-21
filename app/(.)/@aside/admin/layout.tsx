import Link from "next/link";

export default function RootLayout() {
  return (
    < >
      <Link href="/admin/addItem">addItem</Link>
      <Link href="/admin/removeItem">removeItem</Link>
      <Link href="/admin/editItem">editItem</Link>
      <Link href="/admin">admin</Link>
    </>
  );
}
