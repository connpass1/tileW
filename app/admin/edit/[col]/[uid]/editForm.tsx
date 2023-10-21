/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { firestore } from "@/utils/db/firebaseAuth";
import { minLength } from "@/utils/messages";
import { Item } from "@/utils/models/item";
 
import ErrorMessage from "@/app/_components/elements/errorMessage";
import Label from "@/app/_components/elements/label";
import { doc, serverTimestamp, setDoc } from "firebase/firestore/lite";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Rate from "./rate";
import Uploader from "./uploader";

export default function EditForm( initData:Item  ) { 
  const {
    register,
    handleSubmit,reset,
    setError,clearErrors,setValue, 
    formState: { errors, isDirty},
  } = useForm ({  defaultValues:  initData }); 
 
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(initData.preview);
  useEffect(() => {
    setValue("preview",preview)
  },[preview, setValue])
 
  const onSubmit = (data: Item) => { 
    setLoading(true) 
    if (data.created === null) data.created = serverTimestamp();
    else data.updated = serverTimestamp(); 
   const docRef = doc(firestore, "items", initData.uid);
   setDoc(docRef, { ...data })  
  .then((snap) => {   
    setLoading(false)
    console.log(snap); 
       }).catch((e) => {  
         setLoading(false) 
         console.error(e);
         setError('uid', { type: 'custom', message: "ошибка загрузки"});
     }
    ) 
  }; 
  const onReset  = ( ) => { reset( initData)  } 
  return (
      <form onSubmit={handleSubmit(onSubmit)}   className="grid m-4  grid-cols-[min-content_1fr] gap-4 p-4">
      <Label htmlFor="price" errors={errors} /> 
      <input type="number" className="input"  {...register("price", { min: 0 })} />  
      <Label htmlFor="quantity"  />
      <select   {...register("quantity" )}
        className="input p-1.5">
 
  <option value={0} >нет в наличии</option>
  <option value={1}>ожидается</option>
  <option value={2}>предложение ограничено</option>
  <option value={3}>много</option>
</select>
  
      <Label htmlFor="preview" errors={errors} /> 
      <input type="text" {...register("preview")}  className="hidden"   /> 
      <Uploader onCrop={(url) => setPreview(url)} w={80} h={80} url={preview}/> 
      <Label htmlFor="rate"/>
      <Rate num={3} onChange={(x: number)=> setValue("rate",x)}  />  
       <input {...register("rate" )} className="hidden"/>  
      <Label  htmlFor="title" errors={errors}/>
      <input type="text"  {...register("title",  minLength("title",5) ) }  /> 
      <Label  htmlFor="description" errors={errors}/> 
      <textarea rows={4 } 
       className="input" 
        {...register("description",  
         minLength("description", 10)  
        )}
      /> 
      <ErrorMessage errors={errors} loading={loading}  />  
      <button type="reset"    onClick={ onReset }  disabled={!isDirty} />
      
    </form>
  );
}
