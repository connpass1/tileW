import Link from "next/link";
import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BiChevronRight } from "react-icons/bi";

interface ILink{
    text: string,
     href?:string|undefined
}

export default function Breadcrumb ({ paths }:{paths:ILink[] }){  
    return  <ol className="font-extralights inline-flex items-center justify-end gap-2 text-center text-sm row-start-1">
    <li>
      <Link
        href="/" className="inline-flex items-baseline gap-1 text-center" > 
        <AiOutlineHome className="self-center" />
        <span>Home </span>
      </Link>
        </li> 
        {paths.map((l, key) =>   <React.Fragment key={`x${key}`}>  
            <li ><BiChevronRight /> </li>
            <li >
                {l.href ? <Link href={l.href}>{l.text}</Link> :
                <span>{l.text}</span>
                } 
            </li> 
                </React.Fragment>
        )}
     
  </ol>
}