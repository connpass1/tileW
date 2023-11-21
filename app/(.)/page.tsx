import { Metadata } from "next";
export const metadata: Metadata = {
  title:  process.env.NEXT_PUBLIC_SITE_NAME ,
  description:  process.env.NEXT_PUBLIC_SITE_DESCRIPTION,
};
export default function X(){ 
    return <div>index   </div>
 
}  