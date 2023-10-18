import Link from "next/link";

 
 
export default function Menu() {
   return <nav> 
      <Link  href="/" >/  </Link>
     <Link  href="/test" > test  </Link>
     <Link  href="/test/lay" > /test/lay  </Link>
     <Link  href="/login" > exit test  </Link>  
     <Link href="/items/items" > items </Link>
 
     <Link  href="/api/test/test/test" >/api/test/test/test</Link>
     <Link  href="/edit/items/test" >/edit/items/test</Link>
    <Link href="/edit/items" >/edit/itemst</Link>
    
 </nav> 
}