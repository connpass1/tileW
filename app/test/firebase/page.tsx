 
import { storage } from "@/app/db/firebaseAuth";
import { getDownloadURL, ref } from "firebase/storage";
import Image from "next/image";
import FireDoc from "./fireDoc";
import FireSaveFile from "./fireSaveFile";
 
export const revalidate = 60 
 
async function getData() { 
    const starsRef = ref(storage, 'test.jpg'); 
    // Get the download URL
   return  getDownloadURL(starsRef)
      .then((url) => {
        return  url 
      })
      .catch((error) => {
        return error.code 
        
      }); 
   
}

export default async function Page() {
    const data = await getData()
  
  return <> 
        {JSON.stringify(data)}
 <FireDoc/>
 <FireSaveFile/>
 
   <Image  src=  {data}  
     width={500}
     height={500}
     alt=" "
   />
 
 
  </> 
}
