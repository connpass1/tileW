import { BiDotsHorizontalRounded } from "react-icons/bi"

type  Type ={ text: string }

export default function Title({text }: Type) {  
    return <h1 className="col-span-full text-xl px-4">
        {text?.length?text:<BiDotsHorizontalRounded  className="animate-bounce"/>  }
    </h1> 
 }