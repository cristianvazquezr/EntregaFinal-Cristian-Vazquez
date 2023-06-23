import ItemDetail from "./ItemDetail"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AnimationPreloader from "../AnimationPreloader/AnimationPreloader";
import { getDataItem } from "../../services/firebases";
import imgConfudido from "../images/confundido.png"
import { Link } from "react-router-dom";

function ItemDetailContainer(){

    let [item,getItem]=useState([])
    let {id}=useParams()
    let [loading, setLoading]=useState(false)
  


    useEffect(()=>{
        getDataItem(id).then((respuesta)=>{
            getItem(respuesta)
            setLoading(true)
        })
    },[])

    // valido si esta vacio la lista de componentes para mostrar un cargando

   

    return (
        <>
            {loading?
                item!=false?
                    <ItemDetail
                    key={item.id}{...item}
                    producto={item}
                    />
                    :
                    <div className="idNotfound container">
                        <img className="imgNotFound" src={imgConfudido} alt="" />
                        <h5>El producto que busca no exite</h5>
                    <div className="contenedorBoton">
                        <Link to='/'><button className="btn btn-outline-success btnFin" type="button">VOLVER</button></Link>
                    </div> 
                    </div> 
                :
                <AnimationPreloader/>
            } 
        </>
    )

}

export default ItemDetailContainer