import { FaSpinner } from "react-icons/fa6";
 
interface IForm {
    errors: any;
    loading?: boolean | undefined 
    text?:string| undefined 
    
  }

 

export default function ErrorMessage({ errors, loading = undefined, text = "применить" }: IForm) {
    
    let errorMessage = Object.keys(errors).length ? "не корректные дынные" : null
    if (errorMessage !== null) {  
    const t = errors[Object.keys(errors)[0]];
    if (typeof (t.message) === "string" && t.message.length) errorMessage = t.message
}
     
    return <>
        {errorMessage && <i className="col-span-2 text-white bg-error  dark:text-error dark:bg-black/30  px-4  py-2 font-thin rounded-sm text-sm ">
        {errorMessage} </i>}  
        <button type="submit" disabled={errorMessage !== null} className={`btn   bg-primary  enabled:hover:bg-primary_light 
        text-gray-400 enabled:hover:text-gray-200   
     ` } 
  >  
      {loading&& <FaSpinner className="animate-spin h-5 w-5 mr-3" />} 
       {text}
      </button>  
 </>
 
}
interface IButton {
    text?: string | undefined;
    disabled?: boolean;
    onClick?:()=>void | undefined 
}
   
export   function ResetButton({  text = "отмена", disabled = false,onClick=undefined  }:IButton) { 
    
 
    return <button type={onClick ? "reset" : "button"} disabled={disabled} onClick={onClick}
        className={`btn bg-transparent   border border-solid border-gray-400  text-gray-700 
          dark:text-gray-400      enabled:hover:bg-gray-700/20`}   >{text}</button>  
} 
