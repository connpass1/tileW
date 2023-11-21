 
 
 
export default function Page() {  
    return       <form className="gap-4 grid grid-cols-2" action="#"> 
    <label
      htmlFor="email"
      className="label"
    >
      Your email
    </label>
    <input
      type="email"
      name="email"
      id="email"
      className="input"
      placeholder="name@company.com"
      required
    />
    
  <button  > Восстановить пароль </button> 
</form>
}  