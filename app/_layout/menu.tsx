import Link from "next/link";

 
 
export default function Menu() {
   return <nav> 
      <Link  href="/" >/  </Link>
     <Link  href="/articles" > articles  </Link>
     <Link  href="/articles/first" > articles /first  </Link>
     <Link href="/articles/second" > articles/second </Link>
     <Link  href="/login" > exit test  </Link>  
     <Link href="/item" > item </Link>
     <Link href="/item/first" > item/first </Link>
      <Link href="/item/second" > item/second </Link>
      {[0, 1, 2, 3,
         4, 5, 6].map(i => <Link key={i} href={` /item/second${i}`} > {` /item/second${i}`} </Link>)}
     <Link href="/test" > test </Link>
 </nav> 
}