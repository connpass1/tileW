"use server"
import { revalidatePath } from 'next/cache'
 
   async function rev () {
 
       revalidatePath('/[uid]', 'layout')
  }

 
export default async function IndexPage() { 
     
  const data=  rev ()
       
      
   

    return <>
        
       
       
    </>
   
}  