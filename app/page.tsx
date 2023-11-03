import Link from "next/link";
import Card from "./_components/card";

export default function IndexPage(){ 
    return <  >
  
      <div className="flex gap flex-col">
      <Link href="/articles">articles</Link>
      <Link href="/item">item </Link>
      
    
        <Card/>
        <Link href="/login">login</Link></div>
</> 
 
}  