//export const revalidate = 3600 // revalidate at most every hour


export default async function getData(slug: string) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}items/${slug}/test`) 
    if (!res.ok)    return false
    return res.json()
}
export function timeout(ms: number | undefined) {
  return new Promise(resolve => setTimeout(resolve, ms));
}