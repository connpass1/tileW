import { ColUidParamsType } from "@/app/_utils/models/types";

 
export default function  Page({
    params: {col,uid},
  }: ColUidParamsType){ 
    return <> это {col}_ {uid} </>
    
 }