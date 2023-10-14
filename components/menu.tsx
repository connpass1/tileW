import Link from "next/link";

 
 
export default function Menu() {
  return   <> 
     <Link  href="/ups" > ups  </Link>
     <Link  href="/exit" > exit test  </Link>  
     <Link   href="/test/client" >/test/client</Link>
      <Link  href="/test/slug" >/test/[slug]</Link>
      <Link  href="/test/loading" >/test/loading</Link>   
     <Link  href="/test/tilewind" >/test/tilewind</Link> 
     <Link href="/items/items" > items </Link>
     <Link  href="/items/items/test" > /items/test</Link>
     <Link  href="/api/test/test/test" >/api/test/test/test</Link>
     <Link  href="/edit/items/test" >/edit/items/test</Link>
    <Link href="/edit/items" >/edit/itemst</Link>
    
 </> 
}