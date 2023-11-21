import Link from "next/link";

export default function RootLayout({
  children,
  title,
  aside,
}: {
  children: React.ReactNode;
  title: React.ReactNode;
  aside: React.ReactNode;
}) {
  return (
    <>
      {title}
      {aside}
      <main
        className="col-span-full col-start-2 row-start-[3] grid h-full w-full grid-flow-row auto-rows-max px-4
          grid-cols-6   font-font1    max-lg:col-start-1" 
      >
        {children}
      </main>
      <footer > 
        <nav className="gap-4">
          <Link href="/"> home</Link>
          <Link href="/item"> items</Link>
          <Link href="/item/first"> first</Link>
          <Link href="/articles">articles</Link>
          <Link href="/test/ttt">/test/ttt</Link>
          <Link href="/admin">admin</Link>
        </nav>
        <span className="block text-sm">© 2023. All Rights Reserved. </span>
      </footer>
    </>
  );
}
