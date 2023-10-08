import Link from "next/link";
 

export default function Menu() {
  return (
    
    <ul className="p-2 text-sm text-slate-200    mb-2 divide-y divide-slate-500/25  [&>*]:p-2  
    [&>*]:flex [&>*]:w-full">
    {[1, 2, 3, 4, ].map((v) =>  <Link key={v} href="/">  <li key={v}> {v}</li> </Link>)}
    
     
      <Link href="/items/slug" ><li> /items/slug</li></Link> 
     <Link href="/login" > <li> login</li></Link>  
     <Link  href="/test/client" ><li>/test/client</li></Link>
      <Link href="/test/slug" ><li>/test/[slug]</li></Link>
      <Link  href="/test/loading" ><li>/test/loading</li></Link>  
     <Link  href="/api/hello" ><li>api hello1</li></Link>
     <Link  href="/api/route" ><li>api route1</li></Link> 
     <Link  href="/test/tilewind" ><li>/test/tilewind</li></Link>
     <Link  href="/api/hello1" ><li>api hello1</li></Link>
     <Link  href="/api/items" ><li>/api/items</li></Link>
     <Link  href="/api/items/test" ><li>/api/items/test</li></Link>
     <Link  href="/items/items" ><li> items</li></Link>
     <Link  href="/items/items/test" ><li> /items/test</li></Link>
     <Link  href="/api/items/test" ><li>/api/items/test</li></Link>
     <Link  href="/edit/items/test" ><li>/edit/items/test</li></Link>
     <Link  href="/edit/items" ><li>/edit/itemst</li></Link>

  </ul>
    
  );
} 