import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";

export default function Layout({ children }: { children: React.ReactNode }) {
  return ( 
      <>
        <Link href="/content/items" className="inline-flex items-baseline gap-1 text-center"> 
          items
        </Link>
        <BiChevronRight className="self-center" />
        {children}
      </> 
  );
}
