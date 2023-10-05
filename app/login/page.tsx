"use client";
 
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaSpinner } from "react-icons/fa6";
import { signIn } from "../db/firebaseAuth";
import styles from "./login.module.css";
 
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 2500);
});

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
 const [loading,setLoading] = useState (false);       ;
 const [error,setError] = useState (false);
    const onSubmit = (data: IFormInput) => {
      setLoading(true)
     // myPromise.then(() => {
     //   setLoading(false);
     //   alert(JSON.stringify(data));
     // })
      signIn(data).then((res) => {

        console.log( res );
        setLoading(false)
       }).catch((err) => {
        setLoading(false);
        console.log( err) 
        setError(err);
      })
   
    };  
    
  const dis=  errors?.password?.type !== undefined  || errors?.email?.type !== undefined
    return <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
 
   <div className="flex  col-span-2 gap-2 justify-end cursor-pointer">
    <input type="checkbox"  {...register("type")} id="auth"    className="peer hidden"/>
        <label htmlFor="auth"
         className= "peer-checked:text-slate-200  text-slate-500 peer-checked:font-bold font-thin  cursor-pointer"> 
        Вход</label> 
  
    <label htmlFor="auth"  className= "peer-checked:text-slate-500 text-slate-200 peer-checked:font-thin font-bold cursor-pointer" >Регистрация</label>
      </div>
       
        <label  htmlFor="email"  className={errors?.email?.type !== undefined?"text-red-600 font-light":"font-light"}>email</label>
        <input type="text" id="email"
          {...register("email", {
            required: true, 
            pattern:/^[^\s@]+@[^\s@]+\.[^\s@]+$/
          })}
        />
    
      
        <label  htmlFor="password" className={errors?.password?.type !== undefined?"text-red-600 font-light":"font-light"}>password</label>
      <input type="text" id="password"{...register("password", { required: true, maxLength: 30,minLength:5})} />
      
      {dis && <p className={styles.err}>
        {(errors?.email?.type === "required") ? "required email" :
        (errors?.email?.type === "pattern") ? "email is invalid" :
        (errors?.password?.type === "required") ? "required password" :
        (errors?.password?.type === "maxLength") ? ">maxLength 5" :
        (errors?.password?.type === "minLength") ? ">minLength 5" : "?"
        }
             
      </p>}
 
   
      <button type="submit" disabled={dis} className={dis ? styles.dis : styles.but}  >
        {loading && <FaSpinner className="animate-spin h-5 w-5 mr-3" />}
        применить</button> 
        <button type="reset" className={styles.but1} >отмена</button>
      
      </form>
    
  }