'use client';

import { storage } from "@/app/db/firebaseAuth";
import { ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
export default function FireSaveFile() {
  const [state, setState] = useState("")

  const handleSubmit = (event: { preventDefault: () => void; target: HTMLInputElement; }  ) => {
    event.preventDefault()
    const target= event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
  
    if (file) {  
    console.log(file.name, "   -", file.size, "   -", file.type);
    const storageRef = ref(storage, "test.jpg");
    
    uploadBytes(storageRef, file).then((snapshot) => {
      console.log('Uploaded a blob or file!');
      setState("Uploaded a blob or file!")
    }).catch(e => {
      console.log(e);
      setState("error uploading")
    })

  }
}
  return   <div className="p-4"> 
  <p>{state}</p>
  
   
	<label className="input-file">
	   	<input type="file" name="file" onChange={handleSubmit}/>
 	   	<span className="input-file-btn">Выберите файл</span>           
	   	<span className="input-file-text">Максимум 10мб</span>
 	</label>
 

  </div> 
}
