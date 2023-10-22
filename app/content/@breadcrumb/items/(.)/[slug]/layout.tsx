import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";

export default function ItemBreadCrumbLayout({
    children  
  }: { 
      children: React.ReactNode 
  }) {
    return (
      < ><BiChevronRight /><Link href="/content/items">items</Link>  {children} </> 
          
    );
  }