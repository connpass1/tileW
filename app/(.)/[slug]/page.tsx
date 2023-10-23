import Link from "next/link";

export default function DefaultContentPage(){ 
    return <div className="col-start-1 col-end-[-1]row-start-1 row-end-[-1] min-h-screen bg-amber-900  dark:bg-zinc-900">
   
      <h1> Page slug</h1> 
     
      <Link href="/articles">articles</Link>
      <Link href="/items">items</Link>
      
</div> 
 
}  