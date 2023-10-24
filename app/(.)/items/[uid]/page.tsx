import { ColUidParamsType } from "@/app/_utils/models/types";
import Link from "next/link";
  
export default function DefaultContentPage({ params: { uid }}:ColUidParamsType){  
    return <div className="col-start-1 col-end-[-1]row-start-1 row-end-[-1] min-h-screen bg-amber-400 flex flex-col"> 
      <h1 className="before:content-['_↗']"> Page uid {uid  }</h1>  
      <Link href="/articles">articles</Link>
      <Link href="/items">items</Link>
      <Link href="/articles">articles</Link>
      <Link href="/items/first">first</Link>
      <Link href="/items/second">second</Link>
</div> 
 
}  