// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
import { collection} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDt1k8KOeJZ8sqH7dbnp5r7zy0UV6xDzxo",
  authDomain: "next-todo-jisou.firebaseapp.com",
  projectId: "next-todo-jisou",
  storageBucket: "next-todo-jisou.appspot.com",
  messagingSenderId: "556371288190",
  appId: "1:556371288190:web:fee8f66e500c86f890f82f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export  const db = getFirestore(app);

// export const ref = db.collection('list').get();
