import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";

type LinkType = { link: string[] };

type ChildrenType = { children: React.ReactNode  }; 
export function BreadcrumbsLink({ link }: LinkType) {
   
  return <><Link href={link[0]} className="hover:underline ">{link[1]}</Link> <BiChevronRight /></>
}
  
export default function Breadcrumbs({
  children 
   
}: ChildrenType) {
  return (<div className="grid items-center row-start-1 col-span-full grid-flow-col auto-cols-max justify-end   px-4 text-sm font-thin gap-2 "> 
      <BreadcrumbsLink link={["/","home"] } />  
        {children} 
     </div>
  );
}
