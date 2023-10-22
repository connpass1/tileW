import Link from "next/link";

export default function IndexPageContent() {
  return (
    <div
      className="col-start-1 col-end-[-1]
       row-start-1 row-end-[-1] min-h-screen
        bg-amber-900  dark:bg-zinc-900"
    >
      <h1>IndexPage</h1>
      <div className="gap flex flex-col">
        <Link href="/content/articles">articles</Link>
        <Link href="/content/items">items</Link>
        <Link href="/login">login</Link>
      </div>
    </div>
  );
}
