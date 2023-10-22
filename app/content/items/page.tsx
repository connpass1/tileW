import { Item } from "@/utils/models/item"
import Link from "next/link"
import { notFound } from "next/navigation"

export const revalidate = 3600 // revalidate at most every hour
async function getData(  ) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}items` ) 
  if (!res.ok) return false  
  return res.json()
} 
export default async function Page( ) {
  const data = await getData()
  if (!Array.isArray(data)) notFound(); 
  const items = data as Item []
  return  <main className="row-start-3  col-start-1 col-span-2 flex flex-col"> 
      <ul>  {items.map(it => <li key={it.uid}><Link href={`items/${it.uid}`}>{it.title}</Link> </li>)} </ul>
   
    </main> 
 }  