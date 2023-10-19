import Link from "next/link";

 
 
export default function Page() { 
 

  return <div className="flex flex-col gap-8 p-6"> 
     <div className="grid-col-1 col-start-1 row-start-1 first">
      <ul className="p-8  text-lg text-lime-800">
        <Link href="/test/loading">
          <li>loading</li>
        </Link>
        <Link href="/test/ssr">
          <li>ssr</li>
        </Link>
        <Link href="/test/tilewind">
          <li>tilewind</li>
        </Link>
        <Link href="/test/client">
          <li>client</li>
        </Link>

        <Link href="/test/firebase">
          <li>firebase</li>
        </Link>
        <Link href="/test/firebase/upload">
          <li>/test/upload</li>
        </Link>
        <Link href="/api">
          <li> api test</li>
        </Link>
      </ul>
     
      </div>
        
     </div>    
 
 
}
