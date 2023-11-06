import Link from "next/link";
import { Metadata } from "next/types";
import React from "react";
export const metadata: Metadata = {
  title: `${process.env.NEXT_PUBLIC_SITE_NAME} -404`,
};

const Error404: React.FC = () =>  <div className= "flex items-center justify-center w-full  flex-col col-span-full row-span-full gap-12  text-slate-800 dark:text-slate-500 p-8 text-center" >  
       
            <h1 className="mb-4 text-7xl tracking-tight    lg:text-9xl">404</h1>
            <p className="mb-4 text-3xl tracking-tight    md:text-4xl my-12  ">Что-то пошло не так..</p>
            <p className="mb-4 text-lg    md:text-4xl  ">К сожалению, мы не можем найти эту страницу.
             На <Link href="/" className="text-primary">  главной странице</Link> вы найдете много интересного. </p>
          
        </div>     
  
export default Error404;
