export const revalidate = 60 
let promise = () => {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      // переведёт промис в состояние fulfilled с результатом "result"
      resolve({ ups: "result", time: Date.now() });
    }, 2000) ;

  })
}
async function getData() {
  const res = await promise()
    
  return res 
}
 
export default async function Page() {
  const data = await getData()
 
  return <>
 {JSON.stringify(data)}</> 
}