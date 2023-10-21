/* eslint-disable @next/next/no-img-element */
 
import { useRef } from "react";
 
interface IFase {
  onCrop: (url:string)=>void ;
  url: string ;
  w:number;
  h: number;
}
export default function Uploader({ onCrop,w,h,url }:IFase     )   {  
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const handleFile = (event: { target: HTMLInputElement }) => {
      const target = event.target as HTMLInputElement;
     
      const file: File = (target.files as FileList)[0];
      if(!file)return
        const canvas = canvasRef.current;
        const context = canvas?.getContext("2d"); 
          if (context)
            if (canvas) {
              var img = new Image();
              img.src = URL.createObjectURL(file);
              img.onload = () => { 
                context.clearRect(0, 0, w, h)
                context.drawImage(img, 0, 0, w, h);  
                onCrop(canvas.toDataURL("image/jpeg", 0.5)) 
              };
            }
      };
    
    return <div  className="input"> <label htmlFor="dropzone-file"  className=" center py-4 cursor-pointer"> 

      <img src={url } alt="g" className="w-14 "/> 
        <input id="dropzone-file" type="file"  className="hidden" onChange={handleFile}/>
     
    </label>
    
    <canvas
        ref={canvasRef}
        width={w}
        height={h}
        className="hidden"
      />
     </div>
   
 
}