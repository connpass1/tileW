import NextImage from "next/image";
import { BiCloudUpload } from "react-icons/bi";
 
interface IFase { 
    url: string;
    isDownload?: boolean|undefined
 
     
}
export default function Preview({ url ,isDownload=false }: IFase) { 
    
    if (url?.length > 0) return <NextImage src={url} alt="preview" width={80} height={80} /> 
    if (isDownload ) return <BiCloudUpload className="h-16 w-16" />
    return   <div className="h-16 w-16 bg-slate-700"/>

    }