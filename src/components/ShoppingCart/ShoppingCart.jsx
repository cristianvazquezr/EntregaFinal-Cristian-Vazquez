import { useContext, useEffect, useState } from "react"
import ItemListCart from "./ItemListCart"
import {cardContextP} from "../Context/CartContext"
import './ShoppingCart.css' 
import carritoVacio from '../images/empty_cart.png'
import { Link } from 'react-router-dom';
import { createOrder } from "../../services/firebases"
import BuyerForm from "./BuyerForm"
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


function ShoppingCart(){
    let {cart, amountCart,emptyCart, priceTotal}=useContext(cardContextP)
    let[userData,setUserData]=useState({
        nombre:'nombre',
        apellido:'apellido',
        email:'email',
        numeroTelefono:'numeroTelefono',
    })

    function handleChange(evt){
        let nombre=evt.target.name
        let valor=evt.target.value
        const newUserData={...userData}
        newUserData[nombre]=valor;
        setUserData(newUserData)
    }

  
    const handleConfirm = (event) => {
        event.preventDefault()
        if(userData.nombre=='' || userData.apellido=="" || userData.email == "" || userData.numeroTelefono == ""){
            notifyBuyer()
        }
        else{
            const buyer=userData
            createOrder(cart,priceTotal,buyer).then((respuesta)=>{
                let orden = respuesta
                CompraExitosa(orden)
                emptyCart()
            })
            
            
        }

    }


    // mensaje de alerta si se agrego bien al carrito
    function notifyBuyer(){
        const MySwal = withReactContent(Swal)
        MySwal.fire({
            title: <strong>Faltan datos!</strong>,
            html: <i> Complete todos los datos para continuar! </i>,
            icon: 'error'
        })
    }

    function CompraExitosa(orden){
        const MySwal = withReactContent(Swal)
        MySwal.fire({
        title: 'Compra Exitosa!',
        text: `id de compra: ${orden}`,
        imageUrl: 'https://img.freepik.com/vector-premium/manos-aplauden-estilo-plano-aplausos-felicitaciones_186930-606.jpg?w=2000',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })}





    if (amountCart!=0){
        return (
            <>
                <div className="contenedorSC">
                    <ItemListCart
                        productos={cart}
                    />
                    <div className="totalCart container">
                        <div>
                            <h2>TOTAL</h2>
                        </div>
                        <div>
                            <h2>$ {priceTotal}</h2>
                        </div>
                    </div>
                    <div className="contenedorForm">
                        <div className="subContenedorForm container">
                            <BuyerForm handleConfirm={handleConfirm} handleChange={handleChange}></BuyerForm>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    else{
        return(
            <div className="contenedorSCVacio">
                <img src={carritoVacio} alt="" />
                <h4>Su carrito se encuentra vacio...</h4>
                <Link to="/"><button className="btn btn-outline-success btnFin" type="button">SHOP NOW</button></Link>
            </div>
        ) 
    }

}

export default ShoppingCart