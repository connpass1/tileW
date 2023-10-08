
"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
export default function Page({ params }: { params: { slug: string } }) {
  const router = useRouter()
  const  handler =  () =>       router.replace("/")
  return <div className="bg-gray-700 p-44 grid-cols-1 gap-8">
    <div className="text-error" > useRouter  use <q>client </q></div>
    
  </div>
}

import { firestore} from "@/app/db/firebaseAuth";
import { doc, getDoc  } from "firebase/firestore";
 
 
async function getData() {
  
    const docRef = doc(firestore, "items", "hhhhh");
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return docSnap.data()
    } else {
      // docSnap.data() will be undefined in this case
      return  {error:"doc no exist "}
    }
     
   
}
 