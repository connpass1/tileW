import Link from "next/link";

export default function Default() {
  return (
    <div
      className="col-start-1 col-end-[-1]
       row-start-1 row-end-[-1] min-h-screen
        bg-amber-900  dark:bg-zinc-900"
    >
      <h1>Default tsx</h1>
      <div className="gap flex flex-col">
        <Link href="/articles">articles</Link>
        <Link href="/item">item</Link>
        <Link href="/login">login</Link>
      </div>
    </div>
  );
}