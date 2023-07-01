import firebase_app from "../config";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const db = getFirestore(firebase_app)
export default async function getData(collection: string, id: string) {
  let docRef = doc(db, collection, id);

  const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  return docSnap.data();
} else {
  // docSnap.data() will be undefined in this case
  return null;
}
};
