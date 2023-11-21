"use client"
 const likes = 100; 
import { useState } from "react";
import { useForm } from "react-hook-form";
import { selectAll } from "../action";
type FormInputs = {
  test: string
} 
export default function SelectAll() {
const [state,setState]=useState("ggg")

  const {
    register,
    handleSubmit,
    // Read the formState before render to subscribe the form state through Proxy
    formState: { errors, isDirty, isSubmitting, touchedFields, submitCount },
  } = useForm<FormInputs>();
     
    const onSubmit=   (data: FormInputs) => {
      selectAll( ).then(res=>{setState(JSON.stringify(res ))}).catch((e)=>{setState(JSON.stringify(e ))})
   
    }
 
    return (
      <div>{state}
    <form onSubmit={handleSubmit(onSubmit)}>
      
      <button type="submit"  >select all</button>
            </form>
       
         </div>
  );
} 