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
        {errorMessage && < div className="@apply col-span-2  text-error  bg-black/30  px-4  py-2 rounded-lg text-sm italic">
        {errorMessage} </div >}  
        <button type="submit" disabled={errorMessage!==null } className="col-span-2  p-2  rounded  text-sm center 
   bg-primary   hover:bg-primary_light text-gray-400 hover:text-gray-200   disabled:opacity-25 
   disabled:hover:bg-primary disabled:hover:text-gray-400">  
      {loading&& <FaSpinner className="animate-spin h-5 w-5 mr-3" />} 
       {text}
      </button>  
 </>
 
}
