 

import { redirect } from 'next/navigation';
let promise=() => new Promise((resolve, reject) => {

  setTimeout(() => {
    // переведёт промис в состояние fulfilled с результатом "result"
    resolve({ ups:"result"});
  }, 1000);

})
async function create(formData: FormData) {
  'use server';
  const post:any = await promise();
     redirect("?result="+post.ups ) 
 
} 
 
export default function Page() {
  return (
    <form action={create} className='flex flex-col gap-6'>
      <input type="text" name="title" text-gray-800/>
      
      <button type="submit" className='bg-error p-4 hover:bg-error_dark rou rownded-lg'>Submit</button>
    </form>
  );
}