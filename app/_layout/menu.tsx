import Link from "next/link";

 
 
export default function Menu() {
   return <nav> 
      <Link  href="/" >/  </Link>
     <Link  href="/articles" > articles  </Link>
     <Link  href="/articles/first" > articles /first  </Link>
     <Link href="/articles/second" > articles/second </Link>
     <Link  href="/login" > exit test  </Link>  
     <Link href="/items" > items </Link>
     <Link href="/items/first" > items/first </Link>
     <Link href="/items/second" > items/second </Link>
 </nav> 
}