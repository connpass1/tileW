import { Merriweather_Sans } from "next/font/google";
import NextImage from "next/legacy/image";
import Link from "next/link";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const id = "hhh";

const sans = Merriweather_Sans({
  subsets: ["cyrillic-ext"],
  display: "swap",
});
export default function Card() {
  return (
    <div className="grid select-none grid-cols-6   dark:bg-slate-900  shadow-xl  xl:mx-20 col-span-full row-span-1">
      <div className="relative col-span-full h-[75vw]  md:col-span-4  md:h-124  border-r border-slate-500">
        <NextImage
          src="/box.png"
          alt={""}
          layout="fill"
          sizes="(max-width: 768px) 100vw,
              (max-width: 1024px) 50vw,
              33vw"
          priority
          objectFit="cover"
          placeholder="blur"
          blurDataURL="/blur.png"
        />
      </div>
      <div className="col-span-full flex flex-col gap-8 self-center align-middle md:col-span-2 px-6 ">
        <div
          className={`${sans.style} inline-flex  items-end   justify-center text-7xl after:content-['р.'] after:text-3xl  `} >
       22 -33 
        </div>
        <div className="flex items-center justify-center gap-8 text-5xl">
          <AiOutlinePlus className="h-16 w-16 cursor-pointer rounded border px-4" />{" "}
          {8}
          <AiOutlineMinus className="h-16 w-16 cursor-pointer rounded border px-4" />
        </div>

        <Link
          className="btn-primary inline-flex max-h-12 items-center justify-center  p-2 "
          href={`/card?id=${id}`}
        >
          add to card
        </Link>
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
