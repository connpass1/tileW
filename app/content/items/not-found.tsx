import { Metadata } from "next/types";
import React from "react";
export const metadata: Metadata = {
  title: `${process.env.NEXT_PUBLIC_SITE_NAME} -404`,
};

const Error404: React.FC = () =>  <div className= "center p-8 flex-col" >  
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-slate-800 dark:text-slate-500">404</h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-slate-700 md:text-4xl  dark:text-slate-400">Что-то пошло не так..</p>
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">К сожалению, мы не можем найти эту страницу.</p> 
        </div>     
 
 
 

export default Error404;
