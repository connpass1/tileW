import Link from "next/link";
 

export default function Menu() {
  return (
    
    <ul className="p-2 text-sm text-slate-200    mb-2 divide-y divide-slate-500/25  [&>*]:p-2  
    [&>*]:flex [&>*]:w-full">
    {[1, 2, 3, 4, ].map((v) =>  <Link key={v} href="/">  <li key={v}> {v}</li> </Link>)}
    
     
   
     <Link href="/login" > <li> login</li></Link> 
     <Link href="/test/ssr/server_props" >  <li> /test/ssr/server_props</li></Link>
       <Link href="/test/ssr"><li>/test/ssr</li></Link>
     <Link  href="/test/client" ><li>/test/client</li></Link>
     <Link  href="/test/slug" ><li>/test/[slug]</li></Link>
     <Link  href="/u" ><li>u</li></Link>
     <Link  href="/u/uu" ><li>uu</li></Link>
     <Link  href="/api/hello" ><li>api hello1</li></Link>
     <Link  href="/api/route" ><li>api route1</li></Link>
     <Link  href="u" ><li>u</li></Link>
     <Link  href="/ssr" ><li>ssr</li></Link>
     <Link  href="/test/tilewind" ><li>/test/tilewind</li></Link>
     <Link  href="/api/hello1" ><li>api hello1</li></Link>
  </ul>
    
  );
} 