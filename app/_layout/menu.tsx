import Link from "next/link";

 
 
export default function Menu() {
   return <nav> 
      <Link  href="/" >/  </Link>
     <Link  href="/articles" > articles  </Link>
     <Link  href="/articles/lay" > /articlest/lay  </Link>
     <Link  href="/login" > exit test  </Link>  
     <Link href="/items" > items </Link>
     <Link href="/items/lay" > items/lay </Link>
    
 </nav> 
}