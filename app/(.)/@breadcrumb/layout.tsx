import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { BiChevronRight } from "react-icons/bi";
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return ( <div className="flex justify-end items-center"> 
      <Link href="/" className="inline-flex  gap-1 items-center">
          <AiOutlineHome />
          Home
        </Link>
        <BiChevronRight   />
        {children} 
      </div> 
  );
}
