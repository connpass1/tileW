import { FaSpinner } from "react-icons/fa6";
 
interface IForm {
    errors: any;
    loading?: boolean | undefined 
    text?:string| undefined 
    
  }

const buttonStyle="font-semibold col-span-2  p-2  text-sm center  disabled:opacity-25  select-none rounded-md  "

export default function ErrorMessage({ errors, loading = undefined, text = "применить" }: IForm) {
    
    let errorMessage = Object.keys(errors).length ? "не корректные дынные" : null
    if (errorMessage !== null) {  
    const t = errors[Object.keys(errors)[0]];
    if (typeof (t.message) === "string" && t.message.length) errorMessage = t.message
}
     
    return <>
        {errorMessage && < div className="@apply col-span-2 text-white bg-error  dark:text-error dark:bg-black/30  px-4  py-2 rounded-sm text-sm italic">
        {errorMessage} </div >}  
        <button type="submit" disabled={errorMessage !== null} className={`${buttonStyle}   bg-primary_dark  enabled:hover:bg-primary  text-gray-400 enabled:hover:text-gray-200   
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
    className ?: string | undefined  
}
  
const style="bg-transparent   border border-solid border-gray-700  text-gray-700  dark:text-gray-400 enabled:hover:bg-gray-200    enabled:shover:bg-gray-700/20  "


export   function ResetButton({  text = "отмена", disabled = false,onClick=undefined , className=style}:IButton) { 
    
 
    return <button type={onClick ? "reset" : "button"} disabled={disabled} onClick={onClick}
        className={`${buttonStyle}  ${className}`}   >{text}</button> 
    
     
} 
