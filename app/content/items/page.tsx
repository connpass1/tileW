import Link from "next/link";

export default function DefaultContentPage(){ 
    return <div className="col-start-1 col-end-[-1]row-start-1 row-end-[-1] min-h-screen bg-amber-900 flex flex-col"> 
      <h1> Page items</h1>  
      <Link href="/content/articles">articles</Link>
      <Link href="/content/items">items</Link>
      <Link href="/content/items/first">items first</Link>
      <Link href="/content/items/second">items second</Link>
</div> 
 
}  