import Link from "next/link";
 
export default function DefaultContentPage({
  params: { uid },
}: {
  params: { uid : string };
}){ 
    return <div className="col-start-1 col-end-[-1]row-start-1 row-end-[-1] min-h-screen bg-amber-400 flex flex-col"> 
      <h1 className="before:content-['_↗']"> Page uid {uid  }</h1>  
      <Link href="/content/articles">articles</Link>
      <Link href="/content/items">items</Link>
      <Link href="/content/articles">articles</Link>
      <Link href="/content/items/first">first</Link>
      <Link href="/content/items/second">second</Link>
</div> 
 
}  