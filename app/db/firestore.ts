import {
    DocumentData,
    collection,
    doc,
    getDoc as getDocument,
    getDocs as getDocuments,
    getFirestore,
    orderBy,
    query,
    setDoc
} from 'firebase/firestore/lite';
import {
    app
} from "./firebaseAuth";
const firestore = getFirestore(app);
export const getDoc = async (ref: string) => await getDocument(doc(firestore, ref));
export const getDocs = async (col: string) => {
    const collectionRef = collection(firestore, col)
    let q = query(collectionRef, orderBy('uid', 'desc'))
    const querySnapshot = await getDocuments(q)
    const items: DocumentData[] = [];
    querySnapshot.forEach(document => {
        items.push(document.data())
    })
    return items;
}


export const addDoc = async (data: any) => {

    return await setDoc(doc(firestore, `${data.col}/${data.uid}`), data);
}