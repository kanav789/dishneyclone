import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC3OygIDC-46K4r0ogAC6wgUhfXPFNaUnA",
  authDomain: "dishneyclone1.firebaseapp.com",
  projectId: "dishneyclone1",
  storageBucket: "dishneyclone1.appspot.com",
  messagingSenderId: "115805226312",
  appId: "1:115805226312:web:7647b87ed84401e9405f7d",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
      
const provider = new GoogleAuthProvider();
export { auth, provider, db };
