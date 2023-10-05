"use client";
 
 
import { usePathname, useRouter } from 'next/navigation';
export default function BackButton() {
  const router = useRouter()
  
  const pathname = usePathname()
  const onClick=()=>{router.back()}
return <button onClick={onClick}   className="w-12 hover:text-gray-300 hover:font-bold" >↩</button>
}
  