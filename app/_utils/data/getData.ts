//export const revalidate = 3600 // revalidate at most every hour


export default async function getData(slug: string) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}items/${slug}/test`) 
    if (!res.ok)    return false
    return res.json()
}
export function timeout(ms: number | undefined) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function getUser(slug: string) {
  await timeout(3000)
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}faker/user`) 
  if (!res.ok)    return false
  return res.json()
}
 
export async function getItem(slug: string) {
  await timeout(3000)
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}faker/item`) 
  if (!res.ok)    return false
  return res.json()
}
 