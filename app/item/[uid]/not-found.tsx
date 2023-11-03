import Breadcrumbs, { BreadcrumbsLink } from "@/app/_layout/content/breadcrumbs";
import Gallery from '@/app/_layout/content/gallery';
import Title from "@/app/_layout/content/title";
import { Metadata } from "next/types";
import React from "react";
export const metadata: Metadata = {
  title: `${process.env.NEXT_PUBLIC_SITE_NAME} -404`,
};

const Error404: React.FC = () => <>
  <Breadcrumbs ><BreadcrumbsLink link={["/items", "catalog"]} />404 </Breadcrumbs>
  <Title text="404" />
  <main  className="text-center text-slate-800 dark:text-slate-500">
    <Gallery urls={["/box.png"]}/> 
  
    <h1 className="tracking-tight font-extrabold   text-center items-center justify-center 
      text-9xl col-span-full lg:col-span-3 row-start-2 max-lg:row-start-4 m-8">404</h1> 
      <div className="mb-4 text-lg font-light col-span-full row-start-6 ">
      <p>К сожалению, мы не можем найти эту страницу.</p>
      <p> На главной странице вы найдете много интересного</p>
        </div>   </main>
          
</>
  
export default Error404;
