import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDAj6EOpXSbXLfxPLLtCtaPXuwqMHdGOOk",
  authDomain: "wolfcasher.firebaseapp.com",
  projectId: "wolfcasher",
  storageBucket: "wolfcasher.appspot.com",
  messagingSenderId: "402833115413",
  appId: "1:402833115413:web:c4478d320844107cad811c",
  measurementId: "G-JJSR3MXZQC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage(app)


export default app
