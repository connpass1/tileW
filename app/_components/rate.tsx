import { AiTwotoneStar } from "react-icons/ai";
export default function Rate() {  
    return <div className="col-span-full row-start-1 flex child:w-8 child:h-8">
       
        {[0, 1, 2, 3, 4].map((i) => < AiTwotoneStar key={i}/>)}
      
    </div> 
 }
     
 