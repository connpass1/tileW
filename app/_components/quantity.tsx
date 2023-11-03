import { QuantityType } from "../api/_data/types";
type Type = { q: QuantityType }


export default function Quantity({ q }:  Type) {  
    return <div className="col-start-[-1] row-start-1 self-end"> 
       {q===0?"нет в наличии" :"в наличии много" } 
       
      
    </div> 
 }
     
 