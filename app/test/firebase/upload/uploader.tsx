"use client";
import { storage } from "@/utils/db/firebaseAuth";
import { ref, uploadString } from "firebase/storage";
import { useRef, useState } from "react";
import { BiCloudUpload } from "react-icons/bi";
 
 
 
const canvasW = 40;
export default function Uploader() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [file, setFile] = useState<any>(false);

  const handleSave = () => {
    const storageRef = ref(storage, "test.jpg");
    uploadString(storageRef, file, 'data_url').then((snapshot) => {
      snapshot.ref.fullPath
      console.log( snapshot.ref.fullPath );
    }); 
}

  const handleFile = (event: { target: HTMLInputElement }) => {
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d"); 
      if (context)
        if (canvas) {
          var img = new Image();
          img.src = URL.createObjectURL(file);
          img.onload = () => { 
            context.clearRect(0, 0, canvasW, canvasW)
            context.drawImage(img, 0, 0, canvasW, canvasW); 
              setFile(canvas.toDataURL() );
             
          };
        }
  };

  return (
    <div className="col-span-2 flex w-full flex-col items-center  justify-center  gap-2">
      <div className="flex  w-full items-center justify-center  gap-2 bg-gray-800 p-4  ">
        {file  ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={file} width={canvasW} height={canvasW} alt="preview" />
        ) : (
          <div></div>
        )}
         
      </div> 
      <canvas
        ref={canvasRef}
        width={canvasW}
        height={canvasW}
        className="hidden"
      /><p>{file }</p>
      <label
        htmlFor="dropzone-file"
        className="center dark:hover:bg-bray-800  h-48 cursor-pointer flex-col
     rounded-lg border-2 border-solid border-gray-300 bg-gray-50 p-8 hover:bg-gray-100 
     dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
      >
        <div className="flex flex-col items-center justify-center pb-3 pt-3 text-gray-500 dark:text-gray-400">
          <BiCloudUpload className="h-24 w-24" />
          <p className="mb-2 text-sm  ">
            <span className="font-semibold">Click to upload</span> or drag and
            drop
          </p>
          <p className="text-xs ">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <input
          id="dropzone-file"
          type="file"
          className="hidden"
          onChange={handleFile}
        />
      </label>
      <button onClick={handleSave}>handleSave</button>
    </div>
  );
}
