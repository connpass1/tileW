import { firestore } from "@/utils/db/firebaseAuth";
import { doc, getDoc } from "firebase/firestore/lite";
 
 
 
async function getData() {
   
 
    const docRef = doc(firestore, "items/hhhhh");
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return docSnap.data()
    } else {
      // docSnap.data() will be undefined in this case
      return  {error:"doc no exist "}
    }
     
   
}

export default async function FireDoc() {
    const data = await getData()
  
  return <div className="p-8 bg-slate-500"> 
        {JSON.stringify(data)}

  </div> 
}
