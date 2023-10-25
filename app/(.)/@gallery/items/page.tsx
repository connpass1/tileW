export const revalidate = 3600 // revalidate at most every hour
async function getData( ) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}items/items/test`  ) 
    if (!res.ok)    return  false
    return res.json()
  }
   
  export default async function  Page() {
    const data  = await getData( )
    if (!data )  return <div className="flex flex-col gap-2">ff 
    </div>   
    return <div className="flex flex-col gap-2">await gallery { data.uid } date{ data.date } 
      </div>  
         
  }