/* eslint-disable @next/next/no-img-element */

import { useRef, useState } from "react";
import { BiCloudUpload } from "react-icons/bi";
const canvasW = 40; 
export default function Uploader( ) { 

    const [url, setUrl] = useState<string | null>(null);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
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
                setUrl(canvas.toDataURL() ); 
              };
            }
      };
    if (url) return <div className="flex flex-col  items-center justify-center w-full  col-span-2">

        <img src={url} alt="prevew" width={canvasW} height={canvasW} /> 
        
        <button onClick={()=>setUrl(null)}> отмена</button>


    </div>
    
   
    return <div className="flex items-center justify-center w-full  col-span-2">
        <canvas
        ref={canvasRef}
        width={canvasW}
        height={canvasW}
        className="hidden"
      />
 
      


    <label htmlFor="dropzone-file"  className="center flex-col   w-full h-48 border-2
     border-gray-300 border-solid rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 
     hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <div className="flex flex-col items-center justify-center pt-3 pb-3 text-gray-500 dark:text-gray-400">
                
        <BiCloudUpload className="w-8 h-8"/>
            <p  className="mb-2 text-sm  "><span  className="font-semibold">Click to upload</span> or drag and drop</p>
            <p  className="text-xs   ">SVG, PNG, JPG or GIF (MAX. 80px)</p>
        </div>
        <input id="dropzone-file" type="file"  className="hidden" onChange={handleFile}/>
    </label>
    </div>
 
}