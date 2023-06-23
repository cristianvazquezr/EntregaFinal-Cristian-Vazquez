// Import the functions you need from the SDKs you need
import { write } from "@popperjs/core";
import { initializeApp } from "firebase/app";
import {getFirestore, writeBatch} from "firebase/firestore"
import { collection, getDocs, doc, getDoc,query, where, addDoc } from "firebase/firestore";
import { error } from "jquery";
import { useContext } from "react";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

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

export async function getData(){

  const querySnapshot = await getDocs(collection(db, "products"))
  const arrayDocs = querySnapshot.docs
  const dataDocs=arrayDocs.map(item=>{
    return {...item.data(), id: item.id}
  })

  return dataDocs
}

export async function getDataItem(id){

  const docRef = doc(db, "products", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return {...docSnap.data(), id : docSnap.id };
  } else {
    return (false)
  }
    
}

export async function getOrderItem(id){

  const docRef = doc(db, "orders", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return {...docSnap.data(), id : docSnap.id };
  } else {
    return (false)
  }
    
}



export async function getDatafilter(categoria){

  const q = query(collection(db, "products"), where("categoria", "==", categoria));

  const querySnapshot = await getDocs(q);
  const arrayDocs=querySnapshot.docs
  const dataDoc=arrayDocs.map(item=>{
    return {...item.data(), id: item.id}
  })
  return dataDoc
    
}


// crear coleccion para el carrito y generar id de compra

export async function createOrder(cart, totalPrice, buyer){
  
  let batch=writeBatch(db)

  for(let itemProduct of cart ){
    let refDoc=doc(db,"products",itemProduct.id)
    let docSnap= await getDoc(refDoc)
    let {cantidad}=docSnap.data()
    let stockUpdate=cantidad-itemProduct.CantidadCompra
    if (stockUpdate <0){
      throw new error(notifystock(itemProduct.id))
    }
    else{
      batch.update(refDoc,{cantidad: stockUpdate})
    }
  }
  await batch.commit();
  const orderCollection = await addDoc(collection(db, "orders"), {
    buyer: buyer,
    item: cart,
    total: totalPrice,
    time: new Date()
  })
  return orderCollection.id

}


// mensaje de alerta si se agrego bien al carrito
function notifystock(id){
  const MySwal = withReactContent(Swal)
  MySwal.fire({
      title: <strong>Falta STOCK!</strong>,
      html: <i> No hay stock suficiente del producto ID :{id}</i>,
      icon: 'error'
  })
}