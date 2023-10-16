import Link from "next/link";
import { BsFillDoorOpenFill } from "react-icons/bs";
export default function Layout({ children,}: {children: React.ReactNode;}) {

  return    <div className="grid-col-1  ">


  
<ul className="text-lime-800  p-8 text-lg">
<Link href="/test/loading"><li>loading</li></Link>
<Link href="/test/ssr"><li>ssr</li></Link>
<Link href="/test/tilewind"><li>tilewind</li></Link>
<Link href="/test/client"><li>client</li></Link>
           
          <Link href="/test/firebase"><li>firebase</li></Link>  
          <Link href="/test/firebase/upload"><li>/test/upload</li></Link>
     <Link  href="/api" ><li> api  test</li></Link>
  
    </ul>
{children}
 
</div >  
}
