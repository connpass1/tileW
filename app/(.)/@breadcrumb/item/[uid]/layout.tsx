import { ChildrenType } from "@/app/_utils/models/types";
import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";

export default function ItemLayout(  {children}  :  ChildrenType  ) { 
  return <> <Link href="/item">item </Link>   <BiChevronRight   /> {children} </>
} 
