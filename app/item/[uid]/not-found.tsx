 
import Breadcrumbs, { BreadcrumbsLink } from "@/app/_layout/content/breadcrumbs";
import Title from "@/app/_layout/content/title";
import NextImage from "next/legacy/image";
import { Metadata } from "next/types";
import React from "react";
export const metadata: Metadata = {
  title: `${process.env.NEXT_PUBLIC_SITE_NAME} -404`,
};

const Error404: React.FC = () => <>
  <Breadcrumbs ><BreadcrumbsLink link={{ slug: "/items", name: "catalog" }} />404 </Breadcrumbs>
  <Title text="404" />
  <main  className="text-center text-slate-800 dark:text-slate-500 items-stretch">
  <div className="relative col-span-full h-[75vw]    md:col-span-4 md:h-124 text-slate-100" >
  <NextImage
        src="/box.png"
        alt="404"
        layout="fill"
        sizes="(max-width: 768px) 100vw,
        (max-width: 1024px) 50vw,
        33vw"
        priority
        objectFit="cover"
        placeholder="blur"
        blurDataURL="/blur.png"
        />
  </div>
    <h1 className="tracking-tight font-extrabold   text-center items-center justify-center 
      text-9xl col-span-full  md:col-span-2  row-span-4  m-8">404</h1> 
      <div className="mb-4 text-lg font-light col-span-full row-start-6 ">
      <p>К сожалению, мы не можем найти эту страницу.</p>
      <p> На главной странице вы найдете много интересного</p>
        </div>   </main>
          
</>
  
export default Error404;
