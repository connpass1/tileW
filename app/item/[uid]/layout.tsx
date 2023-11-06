import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";

export default function Layout({
  breadcrumb,
  title,
  image,
  card,
  description,
  rate,children
}: {
  breadcrumb: React.ReactNode;
  title: React.ReactNode;
  image: React.ReactNode;
  card: React.ReactNode;
  description: React.ReactNode;
    rate: React.ReactNode;
  children:  React.ReactNode;
}) {
  return (
    <>{children}
      <nav className=" col-span-full 
      items-center justify-end   text-sm font-thin  max-2xl:pr-4 ">
    
        <Link href="/"> home </Link> <BiChevronRight />
        <Link href="/items">items </Link> <BiChevronRight />
        {breadcrumb}
      </nav>
      <h1 className="col-span-full h-12  text-xl first-letter:uppercase max-lg:pl-4 ">
         {title}
      </h1>
      <div className="col-span-full  flex h-12 items-center justify-between text-2xl  max-2xl:pr-4 max-lg:pl-4">
        {rate}
      </div> 
      <div className="relative col-span-full   h-[75vw]  first-letter: md:col-span-4 bg-slate-100  md:h-124 2xl:h-144 dark:bg-slate-900">
        {image}
      </div> 
      <div className="col-span-full  md:col-span-2 flex flex-col justify-center gap-8 child:inline-flex  bg-slate-100 h-full dark:bg-slate-900
       child:rounded  child:justify-center   py-8"  >{card}</div> 
      <span className="col-span-full max-2xl:pr-4 max-lg:pl-4 xl:py-4 ">{description}</span>
     
    </> 
  );
}
