import { Metadata } from "next/types";
import React from "react";
export const metadata: Metadata = {
  title: `${process.env.NEXT_PUBLIC_SITE_NAME} -404`,
};

const Error404: React.FC = () =>  <div className= "center w-full flex-col col-start-1 col-end-[-1] row-start-1 row-end-[-1] min-h-screen p-8" >   
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-slate-800 dark:text-slate-500">404 content</h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-slate-700 md:text-4xl  dark:text-slate-400">Что-то пошло не так..</p>
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400"> главной странице вы найдете много интересного. </p>
           
           
        </div> 
  
export default Error404;
