import NextImage from "next/legacy/image";
export default function X() {
  return (
    <div className="relative  h-full bg-gray-500/20 animate-pulse  md:col-span-4 ">
    <NextImage
      src={"/blur.png"}
      alt="..."
      layout="fill"
      sizes="(max-width: 768px) 100vw,
    (max-width: 1024px) 50vw,
    33vw"
      priority
      objectFit="cover"
      placeholder="blur"
      blurDataURL="/blur.png"
    /></div>
  );
}
