
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { BiChevronRight } from "react-icons/bi";
export default function Breadcrumb() {
  return (
    <menu>
      <li> 
        <Link href="/" className="" >
          <AiOutlineHome  className='px-1 w-8  align-bottom'/>
       <span>Home </span></Link>
      </li>
      <li>
        <BiChevronRight />
      </li>
      <li>
      <Link href="/" className="" >
          <AiOutlineHome  className='px-1 w-8  align-bottom'/>
       <span>Home </span></Link>
        <span>items </span>
      </li>
         
    </menu>
  );
}