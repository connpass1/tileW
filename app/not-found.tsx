import { Metadata } from "next/types";
import React from "react";
import { Bs0SquareFill, Bs4SquareFill, BsFillPlugFill } from "react-icons/bs";

export const metadata: Metadata = {
  title: `${process.env.NEXT_PUBLIC_SITE_NAME} -404`,
};

const Error404: React.FC = () =>  <main  className="center">  <div  className="flex flex-col  h-full gap-2 text-8xl   justify-between p-8 text-yellow-800 lg:w-4/6 "      >

  <div  className="text-4xl flex items-baseline gap-2 ">  страница не найдена !  </div>

  <div className="flex  justify-end">  <BsFillPlugFill />   </div>
  <div className=" gap-2  center lg:text-9xl">   <Bs4SquareFill /> <Bs0SquareFill /> <Bs4SquareFill/> </div>
   <BsFillPlugFill className="rotate-180"/>    
 
   </div>
 </main>

export default Error404;
