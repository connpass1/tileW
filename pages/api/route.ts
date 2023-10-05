import { NextApiRequest, NextApiResponse } from 'next';
let promise = new Promise((resolve, reject) => {

  setTimeout(() => {
    // переведёт промис в состояние fulfilled с результатом "result"
    resolve({ ups:"result"});
  }, 1000);

})
export default async function GET(request: NextApiRequest,res: NextApiResponse) {
 

 

  const feedbacks = await promise

  let json_response = {
    status: "success",
    results: feedbacks 
    
  };
  return res.json(json_response);
}