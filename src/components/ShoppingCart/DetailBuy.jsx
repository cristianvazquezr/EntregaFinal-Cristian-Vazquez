import { useEffect, useState } from "react"
import { getOrderItem } from "../../services/firebases"
import { useParams } from "react-router-dom"

function DetailBuy(){

    let [order,setOrder]=useState([])
    let {id} = useParams()

    useEffect(()=>{
        getOrderItem(id).then((respuesta)=>{setOrder(respuesta)})
    },[])

    return(
        <>
            <div>
                <h2>Compra realizada con exito.</h2>
                <h5>Fecha: {order.time}</h5>
                <h5>Id: {order.id}</h5>
                <h5>PrecioTotal: {order.total}</h5>
            </div>
        
        </>
    )
}

export default DetailBuy