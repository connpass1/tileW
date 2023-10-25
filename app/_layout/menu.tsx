import Link from "next/link";

 
 
export default function Menu() {
   return <nav> 
      <Link  href="/" >/  </Link>
     <Link  href="/articles" > articles  </Link>
     <Link  href="/articles/first" > articles /first  </Link>
     <Link href="/articles/second" > articles/second </Link>
     <Link  href="/login" > exit test  </Link>  
     <Link href="/item" > items </Link>
     <Link href="/item/first" > items/first </Link>
     <Link href="/item/second" > items/second </Link>
 </nav> 
}