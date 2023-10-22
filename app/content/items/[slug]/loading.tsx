import { BiSolidStar } from "react-icons/bi";

export default function LoadingLayout( ) {
  return    <div className="grid grid-cols-2 child:animate-pulse child:h-2 child:w-32 text-slate-500/50"> 
  
      <div/> 
      <div/> 
      <div className="flex  cursor-pointer gap-2 text-4xl ">
        {[0, 1, 2, 3, 4].map((x) => (
          <BiSolidStar
            key={x}
             
          />
        ))}
      </div>
       <div/>  
      <div/>  
      <div/> 
      <div/> 
    </div>
   
}