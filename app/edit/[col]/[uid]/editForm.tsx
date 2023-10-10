/* eslint-disable react-hooks/rules-of-hooks */
"use client";
 
import ErrorMessage from "@/app/components/elements/errorMessage";
import { firestore } from "@/app/db/firebaseAuth";
import { minLength } from "@/utils/messages";
import { Item } from "@/utils/models/item";
import styles from "@/utils/styles/form.module.css";
import { labelStyle } from "@/utils/styles/style";
import { doc, serverTimestamp, setDoc } from "firebase/firestore/lite";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BiCloudUpload } from "react-icons/bi";
import Rate from "./rate";
import Uploader from "./uploader";
 
 

export default function EditForm( initData:Item  ) {

 
  const {
    register,
    handleSubmit,reset,
    setError,clearErrors,setValue,getValues,
    formState: { errors },
  } = useForm ({  defaultValues:  initData }); 
 
  const [loading,setLoading] = useState  (false );
  
  const onSubmit = (data: Item) => {
    console.log(data); 
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
  const handleFile= ( ) => {    }
 

  return (

      <form onSubmit={handleSubmit(onSubmit)}   className={styles.form}>
      <label   className={labelStyle(errors?.price ) }>price </label>
      <input  type="number" className="input"  {...register("price", { min: 0  })} /> 
      <label   className={labelStyle(errors?.quantity ) }>quantity </label>
      <input  type="number" className="input"  {...register("quantity", { min: 0 })} /> 
      <label  className={labelStyle(errors?.preview ) }>preview </label>
      <input type="text" {...register("preview")} className="bg-red-200" disabled/>
     
      <label> rate </label>
      <Rate num={3} onChange={(x: number)=> setValue("rate",x)}  />  
<input     {...register("rate" )} className="hidden"/>
         
      <Uploader/>
      <label   className={labelStyle(errors?.title ) }>title </label>
      <input type="text"  {...register("title",  minLength("title",5) ) }  /> 
      <label   className={labelStyle(errors?.description ) }>description </label> 
      <textarea
       className="input" 
        {...register("description",  
         minLength("description",10)
         
        )}
      />
<div  className="center w-full  col-span-2">
    <label    className="center flex-col   w-full h-48 border-2
     border-gray-300 border-solid rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 
     hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div  className="flex-col center pt-3 pb-3 text-gray-500 dark:text-gray-400">
        <BiCloudUpload className="w-8 h-8"/>
            <p  className="mb-2 text-sm  "><span  className="font-semibold">Click to upload</span> or drag and drop</p>
            <p  className="text-xs   ">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <input id="dropzone-file" type="file"  className="hidden" onChange={handleFile}/>
    </label>
    </div>
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
