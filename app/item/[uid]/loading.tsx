import Rate from "@/app/_components/rate";
import Breadcrumbs, { BreadcrumbsLink } from "@/app/_layout/content/breadcrumbs";
import Title from "@/app/_layout/content/title";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import NextImage from "next/legacy/image";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
 
export default function LoadingUid() {
  
    return <> 
   <Breadcrumbs ><BreadcrumbsLink link={["/items","catalog"] } /><BiDotsHorizontalRounded  className="animate-bounce"/> </Breadcrumbs>
      <Title text="" /> 
      <main className="animate-pulse child:text-slate-500/25 ">
        <Rate rate={0}/> 
        
        <div className="col-span-full row-start-2 grid   select-none  grid-cols-6   shadow-xl  xl:mx-20">
    <div className="relative col-span-full h-[75vw]      md:col-span-4 md:h-124  " >
      <NextImage
        src="/blur.png"
        alt="loading"
        layout="fill"
        sizes="(max-width: 768px) 100vw,
        (max-width: 1024px) 50vw,
        33vw"
        priority
        objectFit="cover"
 
        />
        


    </div>
    <div className="col-span-full flex flex-col gap-8 self-center p-6 align-middle   md:col-span-2 ">
      <div
        className={`  inline-flex  items-end justify-center text-7xl font-extrabold   `}
      >
     0
      </div>
      <div className="flex items-center justify-center gap-8 ">
        <button  className="  h-16 w-16"> </button>
        <span className="w-24  h-8"/> 
        <button   className="  h-16 w-16">   </button>
      </div> 
      <button 
        className="  inline-grid place-items-center p-2"
        >
        add to card
      </button>
    </div>
  </div>
       
     
      </main>
  </>
 
}
