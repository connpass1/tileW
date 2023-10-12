"use client";
 
import { minLength } from "@/utils/messages";
import { useState } from "react";
import { useForm } from "react-hook-form";
import ErrorMessage, { ResetButton } from "../components/elements/errorMessage";
import Label from "../components/elements/label";
import { signIn } from "../db/firebaseAuth";
  interface IFormInput {
    email: string;
    password: string;
    type: boolean;
    
  }
  
  export default function Form() {
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors }
    } = useForm<IFormInput>();
 const [loading,setLoading] = useState (false);   
 const [error,setError] = useState (false);
    const onSubmit = (data: IFormInput) => {
      setLoading(true)
 
      signIn(data).then((res) => {

        console.log( res );
        setLoading(false)
       }).catch((err) => {
        setLoading(false);
        console.log( err) 
        setError(err);
      })
   
    };  
   
  
    const disabled = Object.keys(errors).length>0;
    return <form onSubmit={handleSubmit(onSubmit)} className="grid m-4  grid-cols-[min-content_1fr] gap-4 p-4">
 
   <div className="flex  col-span-2 gap-2 justify-end cursor-pointer">
    <input type="checkbox"  {...register("type")} id="auth"    className="peer hidden"/>
        <label htmlFor="auth"
         className= "peer-checked:text-slate-200  text-slate-500 peer-checked:font-bold font-thin  cursor-pointer"> 
        Вход</label> 
  
    <label htmlFor="auth"  className= "peer-checked:text-slate-500 text-slate-200 peer-checked:font-thin font-bold cursor-pointer" >Регистрация</label>
      </div>
        <Label  htmlFor="email" errors={error}/>
        <input type="text" id="email"
        {...register("email", { 
          ...minLength("email",5),
          pattern: {
            val: /^ [^\s@]+@[^\s@]+\.[^\s@]+$/,
            message:"не валидный email"
          },
        
          })}
        /> 
     
        <Label  htmlFor="password" errors={error}/>
      <input type="text" id="password"{...register("password",   minLength("password",5) )} />
      
      <ErrorMessage errors={errors} loading={loading}/>
       <ResetButton/> 
      </form>
    
  }