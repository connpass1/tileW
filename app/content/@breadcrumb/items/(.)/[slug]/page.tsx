import dynamic from 'next/dynamic';
import { BiChevronRight } from "react-icons/bi";
import Breadcrumb from "../../../_components/breadcrumb";
 
const DynamicBreadcrumb = dynamic(() => import("../../../_components/breadcrumb"), {
  loading: () => <>...</>,
})

export default function BreadcrumbPage(  { params: { slug } }: { params: { slug: string } }  ) {  
  return   <><BiChevronRight /> <span><Breadcrumb slug={slug }/></span> </>
}