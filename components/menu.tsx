import Link from "next/link";

const Li=({href,children}:{href:string,children:React.ReactNode})=>{
return  <li > 
<Link     href={href}> {children} </Link></li> 

}
 
export default function Menu() {
  return    <menu > 
    
     <Li  href="/exit" > exit test  </Li>  
     <Li   href="/test/client" >/test/client</Li>
      <Li  href="/test/slug" >/test/[slug]</Li>
      <Li  href="/test/loading" >/test/loading</Li>   
     <Li  href="/test/tilewind" >/test/tilewind</Li> 
     <Li href="/items/items" > items </Li>
     <Li  href="/items/items/test" > /items/test</Li>
     <Li  href="/api/test/test/test" >/api/test/test/test</Li>
     <Li  href="/edit/items/test" >/edit/items/test</Li>
    <Li href="/edit/items" >/edit/itemst</Li>
    
 </menu> 
}