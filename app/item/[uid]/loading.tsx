import Gallery from "@/app/_components/gallery";
import Rate from "@/app/_components/rate";
import Breadcrumbs, { BreadcrumbsLink } from "@/app/_layout/content/breadcrumbs";
import Title from "@/app/_layout/content/title";
import { BiDotsHorizontalRounded } from "react-icons/bi";
 

 
export default function LoadingUid() {
  
    return <> 
   <Breadcrumbs ><BreadcrumbsLink link={["/items","catalog"] } /><BiDotsHorizontalRounded  className="animate-bounce"/> </Breadcrumbs>
      <Title text="" /> 
      <main className="animate-pulse child:text-slate-500/25 "><Gallery urls={undefined} /> 
      <Rate/> 
      <div className="col-span-3   grid grid-cols-4 gap-4 child:rounded-lg child:bg-slate-500/25 child:h-4 child:col-start-1">
      <div className="col-span-2"/>  
          <div className="col-span-2" />
          <div className="col-span-2" />
          <div className="col-span-4" /> 
          <div className="col-span-4" /> 
          <div className="col-span-4" /> 
          <div className="col-span-3" /> 
        </div>
        <div className="col-span-full h-4   rounded-lg bg-slate-500/25  "/>
        <div className="col-span-5 h-4   rounded-lg bg-slate-500/25  "/> 
        <div className="col-span-full h-4   rounded-lg bg-slate-500/25  "/>
       
     
      </main>
  </>
 
}
