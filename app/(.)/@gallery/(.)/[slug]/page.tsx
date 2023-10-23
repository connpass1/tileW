import { notFound } from "next/navigation";

 
export default function  Page({
    params: { slug },
  }: {
      params: {   slug    : string };
  }){ 
     notFound() 
 }