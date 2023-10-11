/* eslint-disable react-hooks/rules-of-hooks */
"use client";
 
import ErrorMessage from "@/app/components/elements/errorMessage";
import Label from "@/app/components/elements/label";
import { firestore } from "@/app/db/firebaseAuth";
import { minLength } from "@/utils/messages";
import { Item } from "@/utils/models/item";
import styles from "@/utils/styles/form.module.css";
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
    formState: { errors },
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
         console.log( snap );
         setLoading(false)
       }).catch((e) => {  
        setLoading(false) 
     }
    ) 
  }; 
  const onReset  = ( ) => { reset( initData)  } 
  return (
      <form onSubmit={handleSubmit(onSubmit)}   className={styles.form}>
      <Label  htmlFor="price" errors={errors}/>
      <input type="number" className="input"  {...register("price", { min: 0 })} /> 
      <Label  htmlFor="quantity" errors={errors}/>  
      <input  type="number" className="input"  {...register("quantity", { min: 0 })} /> 
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
    <ErrorMessage errors={errors }loading={loading} />   
      <button type="button" onClick={()=>{ setError('uid', { type: 'custom', message: 'custom message' }); }}  className={styles.but}> 
       test
      </button>  
      <button type="button" onClick={ onReset }  className={styles.host}> 
        отмена
      </button> 
      <button type="button" onClick={() =>setValue("price",25)}>  
        отмена
      </button>
    </form>
  );
}
