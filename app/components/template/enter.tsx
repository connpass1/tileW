"use client";
import Link from "next/link";
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import { BsFillDoorOpenFill } from "react-icons/bs";
export default function Enter() {
  const { push } = useRouter();
  const [redirect,setRedirect]=useState(false)
  const pathname = usePathname()

 useEffect(()=> { 
 
 setTimeout(() => {
  setRedirect(true);
 
 // push("/" +pathname + '/lll');
}, 1000)} 
,[])

 
 
 //if(redirect) return NextResponse.redirect(new URL('/new', request.url))

  return      <Link  className="col-start-5    row-start-1"  href="/login"><BsFillDoorOpenFill   className=" icon  "/> </Link>
  
}
