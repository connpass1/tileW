import Link from "next/link";
 

export default function Menu() {
  return (
    
    <ul className="p-2 text-sm text-slate-200 [&>*]:border-b-gray-500/25 [&>*]:p-2 [&>*]:border-b
    [&>*]:flex [&>*]:w-full [&>*]:bg-gray-800/20">
    {[1, 2, 3, 4, ].map((v) => <li key={v}>
      <Link href="/"  className="w-full"
      >{v}</Link></li>)}
      <li> <Link href="/login" className="w-full">login</Link></li>
      <li> <Link href="/test/ssr/server_props" className="w-full">/test/ssr/server_props</Link></li>
      <li> <Link href="/test/ssr" className="w-full">/test/ssr</Link></li>
      <li> <Link href="/test/client" className="w-full">/test/client</Link></li>
      <li> <Link href="/u" className="w-full">u</Link></li>
      <li> <Link href="/u/uu" className="w-full">uu</Link></li>
      <li> <Link href="/api/hello" className="w-full">api hello1</Link></li>
      <li> <Link href="/api/route" className="w-full">api route1</Link></li>
      <li> <Link href="u" className="w-full">u</Link></li>
      <li> <Link href="/ssr" className="w-full">ssr</Link></li>

      <li> <Link href="/api/hello1" className="w-full">api hello1</Link></li>
  </ul>
    
  );
} 