"use client";
 
import { minLength } from "@/app/_components/form/errorMessage";
import { signUp } from "@/app/api/_data/fetch";
import { useState } from "react";
import { ErrorOption, useForm } from "react-hook-form";
import { IFormInput } from "../in/page";
export default function Page() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    setError,
    setValue,
    clearErrors, 
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit = (output: IFormInput) => {
    setLoading(true);  
    signUp(output.email, output.password)
      .then((res) => {
        setLoading(false);
          const error: ErrorOption = { type: "auth", message:JSON.stringify(res) };
        setError("root", error);
      })
      .catch((e) => {
        const error: ErrorOption = { type: "auth", message: JSON.stringify(e) };
        setError("root", error);
        setLoading(false);
      });
  };
  return (
    <form   onSubmit={handleSubmit(onSubmit)}>
      <label
        htmlFor="email">
        
      
        Your email
      </label>
      <input
        type="text" 
        id="email"
        {...register("email", minLength("email", 6))} 
        placeholder="name@company.com"
      />
      <label
        htmlFor="password" 
      >
        Password
      </label>
      <input
        type="password"
        {...register("password", minLength("password", 6))} 
        id="password"
        placeholder="••••••••" 
      />
 <label
      htmlFor="password1" 
    >
      Password repeat
    </label>
    <input
      type="password"
      name="password1"
      id="password1"
      placeholder="••••••••"  
      required
    /> 
      <button> Sign in </button>
    </form>
  );
}


 
 