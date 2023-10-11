"use client";
  
import { useRouter } from 'next/navigation';
export default function BackButton() {
  const router = useRouter()  
  const onClick=()=>{router.back()}
return <button onClick={onClick}   className="w-12 hover:text-gray-300 hover:font-bold" >↩</button>
}
  