import Link from "next/link";
import { BsFillDoorOpenFill } from "react-icons/bs";
export default function Layout({ children,}: {children: React.ReactNode;}) {

  return<> 
      <Link  className="col-start-5    row-start-1"  href="/login"><BsFillDoorOpenFill   className=" icon  "/> </Link>
<Link  className="col-start-3    row-start-1"  href="/login"><BsFillDoorOpenFill   className=" icon  "/> </Link>
  <main >
 
  <p>ss</p>
{children}
  
</main >  </>
}
