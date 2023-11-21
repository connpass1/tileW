
import { Metadata } from "next";
export const metadata: Metadata = {
  title:  "админка" ,
  description:  process.env.NEXT_PUBLIC_SITE_DESCRIPTION,
};

import { ChildrenType } from "@/app/layout";
export default function X({ children }: ChildrenType) {
  return <h1 className="col-start-1 lg:col-start-2 col-end-[-1] row-start-2 px-4  font-font2 text-lg first-letter:capitalize">{children} </h1>;
}
