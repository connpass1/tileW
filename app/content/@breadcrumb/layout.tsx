import { Neucha } from "next/font/google";
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { BiChevronRight } from "react-icons/bi";


const neucha = Neucha  ({
  subsets: ["latin", "cyrillic"],
  weight:"400"
}); 
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (   <div> 
      <Link href="/" className="inline-flex  gap-1 text-center">
          <AiOutlineHome  />
          Home
        </Link>
        <BiChevronRight   />
        {children}

      </div> 
  );
}
