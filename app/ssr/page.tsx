 

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
    <form action={create}>
      <input type="text" name="title" text-gray-800/>
      
      <button type="submit" className='bg-red-600 p-4 hover:bg-red-900'>Submit</button>
    </form>
  );
}