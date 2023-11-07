export async function getItem(slug: string) { 
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}test/item/${slug}/`,{ next: { tags: ['getItem',slug] } }) 
    if (!res.ok)    return false
    return res.json()
}
export async function login(email: string,password :string) { 
  const res = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.NEXT_PUBLIC_FIREBASE_API_KEY}`, {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'  }, 
    body: JSON.stringify({
      email: email, password:   password
    }),
  }) 
  if (!res.ok) {
    return {
      status: res.statusText,
     
    }
  }  
  return res.json()
}  
 
export async function signUp(email: string,password :string) { 
  const res = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.NEXT_PUBLIC_FIREBASE_API_KEY}`, {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'  }, 
    body: JSON.stringify({
      email: email, password:   password
    }),
  }) 
  if (!res.ok) {
    return {
      status: res.statusText,
     
    }
  }  
  return res.json()
}  
 
export async function getUserData(idToken: string ) { 
  const res = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${process.env.NEXT_PUBLIC_FIREBASE_API_KEY}`, {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'  }, 
    body: JSON.stringify({
    
idToken:idToken
    }),
  }) 
  if (!res.ok) {
    return {
      status: res.statusText,
     
    }
  }  
  return res.json()
}  


 