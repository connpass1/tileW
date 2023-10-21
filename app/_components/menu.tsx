import Link from "next/link";

 
 
export default function Menu() {
   return <nav> 
      <Link  href="/" >/  </Link>
     <Link  href="/content/articles" > articles  </Link>
     <Link  href="/content/articles/lay" > /articlest/lay  </Link>
     <Link  href="/login" > exit test  </Link>  
     <Link href="/content/items" > items </Link>
     <Link href="/content/items/lay" > items/lay </Link>
     <Link  href="/api/test/test/test" >/api/test/test/test</Link>
     <Link  href="/edit/items/test" >/edit/items/test</Link>
    <Link href="/edit/items" >/edit/itemst</Link> 
 </nav> 
}