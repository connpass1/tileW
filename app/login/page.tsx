"use client";
 
import { useState } from "react";
import { useForm } from "react-hook-form";
import { signIn } from "../db/firebaseAuth";
 
 
import { minLength } from "@/utils/messages";
import styles from "@/utils/styles/form.module.css";
import { labelStyle } from "@/utils/styles/style";
import ErrorMessage from "../components/elements/errorMessage";
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
    return <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
 
   <div className="flex  col-span-2 gap-2 justify-end cursor-pointer">
    <input type="checkbox"  {...register("type")} id="auth"    className="peer hidden"/>
        <label htmlFor="auth"
         className= "peer-checked:text-slate-200  text-slate-500 peer-checked:font-bold font-thin  cursor-pointer"> 
        Вход</label> 
  
    <label htmlFor="auth"  className= "peer-checked:text-slate-500 text-slate-200 peer-checked:font-thin font-bold cursor-pointer" >Регистрация</label>
      </div>
        <label  htmlFor="email"  className={labelStyle(errors?.email)}>email</label>
        <input type="text" id="email"
        {...register("email", { 
          ...minLength("email",5),
          pattern: {
            val: /^ [^\s@]+@[^\s@]+\.[^\s@]+$/,
            message:"не валидный email"
          },
        
          })}
        /> 
      
        <label  htmlFor="password" className={labelStyle(errors?.password) }>password</label>
      <input type="text" id="password"{...register("password",   minLength("password",5) )} />
      
      <ErrorMessage errors={errors} loading={loading}/>
        <button type="reset" className={styles.host} >отмена</button> 
      </form>
    
  }