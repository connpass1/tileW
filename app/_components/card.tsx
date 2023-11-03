 "use client"
import NextImage from "next/legacy/image";
import { useRouter } from 'next/navigation';
import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BiChevronRight } from "react-icons/bi";
import { IItem } from '../api/_data/types';
export default function Card({ item }: { item: IItem }) {
const router = useRouter()
  const [q, setQ] = useState(0)
  const [src,setSrc]=useState (0) 

const push=()=>{router.push(`/card/${item.uid}/${q}`) }

  return (
    <div className="col-span-full row-start-2 grid  select-none  grid-cols-6   tracking-tight shadow-xl  xl:mx-20 dark:bg-slate-900">
    <div className="relative col-span-full h-[75vw]   md:col-span-4 md:h-124 text-slate-100" >
      <NextImage
        src={item.images[src]}
        alt={item.title}
        layout="fill"
        sizes="(max-width: 768px) 100vw,
        (max-width: 1024px) 50vw,
        33vw"
        priority
        objectFit="cover"
        placeholder="blur"
        blurDataURL="/blur.png"
        />
        <button   onClick={()=>setSrc(src-1)}  disabled={src===0} 
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 text-slate-400 disabled:text-slate-500/25 enabled:hover:text-slate-100 " >
          <BiChevronRight className="rotate-180 w-12 h-12 border-2 rounded-full bg-slate-100/20  border-current "/>
              
            <span className="sr-only">Previous</span> 
    </button>
        <button   onClick={()=>setSrc(src+1) } disabled={src>=item.images.length-1}
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 text-slate-400 disabled:text-slate-500/25 enabled:hover:text-slate-100"  >
             <BiChevronRight className="w-12 h-12 border-2 rounded-full bg-slate-100/20  border-current "/> 
            <span className="sr-only">Next</span> 
    </button> 
    </div>
    <div className="col-span-full flex flex-col gap-8 self-center p-6 align-middle font-mono md:col-span-2 ">
      <div
        className={`inline-flex  items-end justify-center text-7xl font-extrabold text-primary_dark after:text-3xl after:content-['р.']`}
      >
       {item.price}
      </div>
      <div className="flex items-center justify-center gap-8 ">
        <button disabled={q===0}  onClick={ ()=>setQ(q-1)}  className="slate h-16 w-16"><AiOutlineMinus className=" h-8 w-8"  /></button>
        <span className="text-5xl  font-bold text-slate-500 ">{q}</span>
        <button onClick={ ()=>setQ(q+1)}  className="slate h-16 w-16">  <AiOutlinePlus    className=" h-8 w-8"  /></button>
      </div> 
      <button disabled={q===0}
        className="slate inline-grid place-items-center p-2"
        onClick={push}>
        add to card
      </button>
    </div>
  </div>
  );
}

// 'sm': '640px',
// // => @media (min-width: 640px) { ... }

// 'md': '768px',
// // => @media (min-width: 768px) { ... }

// 'lg': '1024px',
// // => @media (min-width: 1024px) { ... }

// 'xl': '1280px',
// // => @media (min-width: 1280px) { ... }

// '2xl': '1536px',
// // => @media (min-width: 1536px) { ... }
