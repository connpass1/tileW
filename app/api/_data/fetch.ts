export async function getItem(slug: string) { 
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}test/item/${slug}/`,{ next: { tags: ['getItem',slug] } }) 
    if (!res.ok)    return false
    return res.json()
  }