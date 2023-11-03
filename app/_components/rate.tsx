import React from "react";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";
import { RateType } from "../api/_data/types";
type Type = { rate: RateType }


export default function Rate({ rate }: Type) {  
    return <div className="col-start-1 col-span-2 row-start-1 flex child:w-8 child:h-8 text-orange-600">
       
        {[0, 1, 2, 3, 4].map((i) =><React.Fragment key={i}>
            {rate / 2 < i ? <IoIosStarOutline /> : rate / 2 > i ? <IoIosStar /> : <IoIosStarHalf />}
            </React.Fragment>) } 
      
    </div> 
 }
     
 