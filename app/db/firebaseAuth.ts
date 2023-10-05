import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, } from "firebase/auth";
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  // databaseURL:process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
};

export const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
auth.languageCode = 'ru';
export const signIn = async (values: { type: boolean; email: string; password: string; }) => {
  const f = values.type ? signInWithEmailAndPassword : createUserWithEmailAndPassword
  return await f(auth, values.email, values.password);
}
export const signInGoogle = async () => {
  const provider = new GoogleAuthProvider();

  return await signInWithPopup(auth, provider);
}

