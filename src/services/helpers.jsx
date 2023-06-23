import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { collection, getDocs, doc, getDoc,query, where, addDoc } from "firebase/firestore";
import comidas from '../../data/productos'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGfGgQyzS927V-l0b1j3RhO359oz7aFSs",
  authDomain: "react-coderhouse-95764.firebaseapp.com",
  projectId: "react-coderhouse-95764",
  storageBucket: "react-coderhouse-95764.appspot.com",
  messagingSenderId: "516764335806",
  appId: "1:516764335806:web:40562e1628c7fbf39328ef"
};

// Initialize Firebase
const FireBaseApp = initializeApp(firebaseConfig);
const db=getFirestore(FireBaseApp)


export async function exportData(){

    for(let item of comidas){
        delete item.id
        const productCollection = await addDoc(collection(db, "products"), item);
        console.log(`se creo el objeto ${productCollection.id}`)
    }
    

}