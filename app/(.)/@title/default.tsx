export default  async function Title({
  params: { uid,col},
}: ColUidParamsType)  {
  return <h1 className="animate-pulse row-start-2 text-2xl m-4 col-span-4 ">hhhh ... это  _ {uid}{col}  </h1>;
} 
 