import Link from "next/link";
import { BsFillDoorOpenFill } from "react-icons/bs";
export default function Layout({ children,}: {children: React.ReactNode;}) {

  return<> 
      <Link  className="col-start-5    row-start-1"  href="/login"><BsFillDoorOpenFill   className=" icon  "/> </Link>
<Link  className="col-start-3    row-start-1"  href="/login"><BsFillDoorOpenFill   className=" icon  "/> </Link>
  <main className="grid-col-1  ">
 
  <p>test</p>
    
    <ul className="text-lime-800 list-disc">
<Link href="/test/loading"><li>loading</li></Link>
<Link href="/test/ssr"><li>ssr</li></Link>
<Link href="/test/tilewind"><li>tilewind</li></Link>
<Link href="/test/client"><li>client</li></Link>
          <Link href="/test/slug1"><li>slug1</li></Link>
          <Link href="/test/firebase"><li>firebase</li></Link>  
          <Link  href="/api/items" ><li>/api/items</li></Link>
     <Link  href="/api/items/test" ><li>/api/items/test</li></Link>
 <Link  href="/api/hello" ><li>api hello1</li></Link> <Link  href="/api/route" ><li>api route1</li></Link>  <Link  href="/api/hello1" ><li>api hello1</li></Link>
       
    </ul>
{children}
 
</main >  </>
}
