import ItemDetail from "./ItemDetail"
import comidas from '../../../data/productos'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function getData(id){
    let promesa=new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(comidas)
        }, 2000);
    })
    return promesa
}

console.log()

function ItemDetailContainer(){

    let [item,getItem]=useState([])
    let {id}=useParams()

    useEffect(()=>{
        getData().then((respuesta)=>{
            getItem(respuesta.find(item=>item.id==id))
        })
    },[])

    return (
        <>
            <ItemDetail
                key={item.id}{...item}
            />
        </>
    )

}

export default ItemDetailContainer