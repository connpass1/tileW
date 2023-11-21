
 
"use client";
 
import { ErrorText, maxLength } from "@/app/_components/form/errorMessage";
import Label from "@/app/_components/form/label";
import { createItem } from "@/app/action";
 
import { useState } from "react";
import { ErrorOption, useForm } from "react-hook-form";
export interface IFormInput { 
  sort: number;
    title: string;
    name: string;
    render :number;
    description: string;
    parent_id : number;
     
  }
 

export default function X() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    setError, 
    clearErrors ,
    formState: { errors },
  } = useForm<IFormInput>();
  
  
  const onSubmit = (output: IFormInput) => {
    clearErrors()
    setLoading(true);  
    createItem(output )
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
    <form className="md:lg:col-span-full lg:col-span-3 px-2" onSubmit={handleSubmit(onSubmit)}>
 

      <Label    htmlFor="title" />   
      <input
        type="text" 
        id="title"
        {...register("title", maxLength("title",25) )}   
        className={errors?.title?.message===undefined?"input":"input text-error"}
        placeholder="title"
      /> 
          <ErrorText >{errors?.title?.message}</ErrorText > 
      <Label 
        htmlFor="name" />    
      
      <input
        type="text" 
        id="name"
        {...register("name", maxLength("name",25) )}   
        className={errors?.name?.message===undefined?"input":"input text-error"}
        placeholder="name"
      /> 
          <ErrorText >{errors?.name?.message}</ErrorText > 
          <Label 
        htmlFor="description" /> 
          <textarea
       rows={4}
        id="description"
        {...register("description", maxLength("description",255) )}   
        className={errors?.description?.message===undefined?"input":"input text-error"}
        placeholder="description"
      /> 
      <ErrorText >{errors?.description?.message}</ErrorText >
      <Label htmlFor="parent_id" />
      <select id="render" {...register("parent_id"  )}  className="select" >
   
  <option value={0}>United States</option>
  <option value={1}>Canada</option>
  <option value={2}>France</option> 
</select>    
<select id="render" {...register("render"  )}  className="select" >
  
  <option value={0}>United States</option>
  <option value={1}>Canada</option>
  <option value={2}>France</option> 
</select>
<Label htmlFor="sort"/>
          <input id="sort" type="range"  className="range col-span-2"  
 min={0}
 max={50}
 step={1} 
 {...register("sort")}  
              ></input>
        <ErrorText>{errors?.root?.message }</ErrorText>  
      <button type="submit"   disabled={errors?.name!==undefined||errors?.title!==undefined} > Sign in </button>
    </form>
  );
}
