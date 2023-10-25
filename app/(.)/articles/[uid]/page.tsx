import Link from "next/link";

 
export default function DefaultContentPage() {
   return <div className="col-start-1 col-end-[-1]row-start-1 row-end-[-1] min-h-screen bg-amber-900  dark:bg-zinc-900">
  
      <h1>Defaultarticles</h1>
      <div className="flex gap flex-col">
         <Link href="/articles">articles</Link>
         <Link href="/items">items</Link>
         <Link href="/login">login</Link></div>
   </div>
}  