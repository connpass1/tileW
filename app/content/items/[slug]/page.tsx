import { notFound } from "next/navigation";
import { BiChevronRight, BiSolidStar } from "react-icons/bi";

//export const revalidate = 3600; // revalidate at most every hour
async function getData(slug: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}items/${slug}`, {
     next: { revalidate: 3600 }  
  });

  if (!res.ok) return false;
  return res.json();
}

async function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const data = await getData(slug);
  if (!data) return notFound();
  const { quantity, rate, price, created, description, title, updated } = data;

  return (
<> <div
          className="col-start-2 row-start-1  align-middle inline-flex items-baseline gap-2  font-extralights text-center text-sm whitespace-nowrap">
        <BiChevronRight className="self-center"/>  {title}</div> 
    <div className="flex flex-col row-start-3  col-span-2 col-start-1 bg-amber-800">  
      <div>title {title}</div> 
      <div>quantity {quantity}</div>
      <div className="flex  cursor-pointer gap-2 text-4xl text-yellow-500 ">
        {[0, 1, 2, 3, 4].map((x) => (
          <BiSolidStar
            key={x}
            className={rate > x ? "text-yellow-500" : "text-yellow-100"}
          />
        ))}
      </div>
      <div>price {price}</div>
      <div>description {description}</div>
      <div>{created?.seconds}</div>
      <div>{updated?.seconds}</div>
    </div></>
  );
}
export default Page;