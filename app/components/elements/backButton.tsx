"use client";
interface IBackButton {
  className?: string | undefined; 
    
}
import { useRouter } from 'next/navigation';
export default function BackButton({  className="text-slate-500 bg-transparent hover:text-slate-400 "} :IBackButton) {
  const router = useRouter()  
  const onClick=()=>{router.back()}
return <button type='button' onClick={onClick}   className={className } >назад</button>
}
  