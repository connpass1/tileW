import { ChildrenType } from "@/app/_utils/models/types";
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { BiChevronRight } from "react-icons/bi";
 
export default function Layout({ children }: ChildrenType) {
  return ( <div className="flex justify-end items-center   text-sm italic"> 
      <Link href="/" className="inline-flex  gap-1 items-center  text-sm">
          <AiOutlineHome />
          Home
        </Link>
        <BiChevronRight   />
        {children} 
      </div> 
  );
}
