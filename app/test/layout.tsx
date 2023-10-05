import Link from "next/link";
import { BsFillDoorOpenFill } from "react-icons/bs";
export default function Layout({ children,}: {children: React.ReactNode;}) {

  return<> 
      <Link  className="col-start-5    row-start-1"  href="/login"><BsFillDoorOpenFill   className=" icon  "/> </Link>
<Link  className="col-start-3    row-start-1"  href="/login"><BsFillDoorOpenFill   className=" icon  "/> </Link>
  <main >
 
  <p>test</p>
  <div className="flex center bg-slate-400 h-3/4 gap-8">
{children}
</div>
</main >  </>
}
