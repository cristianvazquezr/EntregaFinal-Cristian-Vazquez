import { useState } from "react"
import { useContext } from "react"
import { cardContextP } from "../Context/CartContext"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'




function ButtonList({stock,item}){

    let [cantidadCompra, setCantidadCompra]=useState(1)
    let [cantidadCarrito, setCantidadCarrito]=useState(0)

    function aumentarCantidad(){
        if (cantidadCompra>={stock}.stock){
            cantidadCompra={stock}.stock
            setCantidadCompra(cantidadCompra)
        }
        else{
            cantidadCompra+=1
            setCantidadCompra(cantidadCompra)
        }
    }
    function disminuirCantidad(){
        if (cantidadCompra<=1){
            cantidadCompra=1
            setCantidadCompra(cantidadCompra)
        }
        else{
            cantidadCompra-=1
            setCantidadCompra(cantidadCompra)
        }

    }
    
    let {addItem} = useContext(cardContextP)
    

    function agregarAlCarrito(){
        cantidadCarrito=cantidadCarrito+cantidadCompra
        setCantidadCarrito(cantidadCarrito)
        notify()
        addItem({item}.item, cantidadCompra)
        return cantidadCarrito
    }

    function notify(){
        const MySwal = withReactContent(Swal)

        MySwal.fire({
            title: <strong>carrito actualizado con exito!</strong>,
            html: <i>Se agregaron {cantidadCompra} productos al carrito </i>,
            icon: 'success'
          })
    }

    if ({stock}.stock!=0){

    return(
        <>
        <div className='buttonList'>
        
            <div className="input-group mb-3">
                <button onClick={disminuirCantidad} className="btn btn-outline-secondary" type="button" id="button-addon1">-</button>
                <input type="number" className="form-control inputCant" placeholder="Cantidad" aria-label="Recipient's username" aria-describedby="button-addon2" value={cantidadCompra} readOnly/>
                <button onClick={aumentarCantidad} className="btn btn-outline-secondary" type="button" id="button-addon2">+</button>
            </div>
            <button className="btn btn-outline-secondary botonCarrito" type="button" id='' onClick={agregarAlCarrito}>Agregar al carrito</button>
        </div>
        </>
    )}
    else{
        return(
            <>
            <div className='buttonListSS'>
                <h5>AGOTADO</h5>
                <p>¡Pero no te procupes, pronto habrá más!</p>
            </div>
            </>
        )

    }
}

export default ButtonList
