import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";

export default function Layout({ children }: { children: React.ReactNode }) {
  return ( 
      <> 
        {children}
      </> 
  );
}
