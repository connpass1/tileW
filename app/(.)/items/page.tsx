import Link from "next/link";

export default function DefaultContentPage(){ 
    return <div className="row-start-3   bg-amber-900 flex flex-col"> 
      <h1> Page items</h1>  
      <Link href="/articles">articles</Link>
      <Link href="/items">items</Link>
      <Link href="/items/first">items first</Link>
      <Link href="/items/second">items second</Link>
</div> 
 
}  