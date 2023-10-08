"use client";
 
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaSpinner } from "react-icons/fa6";
import { signIn } from "../db/firebaseAuth";
 
import { maxMessage, minMessage, requiredMessage } from "@/utils/messages";
import styles from "@/utils/styles/form.module.css";
import { labelStyle } from "@/utils/styles/style";
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
            required: true, 
            pattern:/^[^\s@]+@[^\s@]+\.[^\s@]+$/
          })}
        /> 
      
        <label  htmlFor="password" className={labelStyle(errors?.password) }>password</label>
      <input type="text" id="password"{...register("password", { required: true, maxLength: 30,minLength:5})} />
      
      {disabled && <div className={styles.err}>
        {(errors?.email?.type === "required") ? requiredMessage("email") :
        (errors?.email?.type === "pattern") ? "email не валидный" :
        (errors?.password?.type === "required") ? requiredMessage("пароль") :
        (errors?.password?.type === "maxLength") ?  maxMessage("пароль",30) :
        (errors?.password?.type === "minLength") ?  minMessage("пароль",5) : "?"
        } 
      </div>} 
      {error &&<div className={styles.err}>{JSON.stringify(error)}</div>}
      <button type="submit" disabled={disabled} className={styles.but}  >
        {loading && <FaSpinner className="animate-spin h-5 w-5 mr-3" />}
        применить</button> 
        <button type="reset" className={styles.host} >отмена</button> 
      </form>
    
  }