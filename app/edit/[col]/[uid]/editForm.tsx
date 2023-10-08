/* eslint-disable react-hooks/rules-of-hooks */
"use client";
 
import { firestore } from "@/app/db/firebaseAuth";
import { maxMessage, minMessage, requiredMessage } from "@/utils/messages";
import { IItem, Item } from "@/utils/models/item";
import styles from "@/utils/styles/form.module.css";
import { labelStyle } from "@/utils/styles/style";
import { doc, serverTimestamp, setDoc } from "firebase/firestore/lite";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaSpinner } from "react-icons/fa6";

export default function editForm( initData:Item  ) {
  const {
    register,
    handleSubmit,
    setError,clearErrors,
    formState: { errors },
  } = useForm ({  defaultValues: new Item(initData)}); 
 
  const [loading,setLoading] = useState  (false );
  
  const onSubmit = (data: Item) => {
    console.log(data); 
    setLoading(true)
    
    if (data.created === null) data.created = serverTimestamp();
    else data.updated = serverTimestamp();
   // const docRef = doc(firestore, `items/ ${initData.uid}`);
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

  const dis = Object.keys(errors).length>0;
  return (

    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <p className={styles.err}> {JSON.stringify(initData)} </p>
      <label   className={labelStyle(errors?.price ) }>price </label>
      <input  type="number" className="input "
        {...register("price", { min: 0 })} 
      />
      <label   className={labelStyle(errors?.title ) }>title </label>
      <input
        type="text"
       
        {...register("title", {
          required: true,
         
        })}
      />
      <label   className={labelStyle(errors?.title ) }>
description
      </label>
      <textarea
       className="input invalid:bg-error"
        
        {...register("description", {
          required: true,
          maxLength: 55,
          minLength: 5,
        })}
      />

{dis && <p  className={styles.err}>
        {(errors?.title?.type === "required") ? requiredMessage("title") : 
        (errors?.description?.type === "required") ?  requiredMessage("description") :
        (errors?.description?.type === "maxLength") ?  maxMessage("description",55) :
        (errors?.description?.type === "minLength") ?  minMessage("description",5) :  
        (errors?.uid) ?  errors?.uid.message :  
        (errors?.price) ?   "цена нее корректна" : ""
        
        }  
     </p>
      }
 

      <button type="submit" disabled={dis} className={styles.but}> 
      {loading&& <FaSpinner className="animate-spin h-5 w-5 mr-3" />}
 
        добавить
      </button> 
      <button type="button" onClick={()=>{ setError('uid', { type: 'custom', message: 'custom message' }); }}  className={styles.but}> 
       test
      </button> 
      <button type="button" onClick={()=>{     clearErrors('uid') }}  className={styles.but}> 
        clearErrors
      </button>
      <button type="reset" onClick={()=>{     clearErrors('uid') }}  className={styles.but}> 
        clearErrors
      </button>
    </form>
  );
}
