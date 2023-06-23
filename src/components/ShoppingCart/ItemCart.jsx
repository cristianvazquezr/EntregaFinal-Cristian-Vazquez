import './ShoppingCart.css' 
import Delete from '../icons/DDelete'
import { useContext } from 'react'
import { cardContextP } from '../Context/CartContext'
import { Link } from 'react-router-dom'



function ItemCart({itemCart}){

    let {subtractCant,removeObj,addCant}=useContext(cardContextP)
    
    return(
        <>
        <section className="shoppingCart row">
            <article className="shoppingCart-article col-md-6 col-12">

                <img className="imagenSC px-1" src={itemCart.imagen} alt="" />

                <div className='descripcionSC'>
                    <div>
                       <h1 className='nombreSC'>{itemCart.nombre} ($ {itemCart.precio})</h1> 
                    </div>
                    <div>
                        <h4 className='descripcionSC'>{itemCart.descripcion}</h4>
                    </div>
                    <div className=''>
                        <button onClick={()=>removeObj(itemCart)} className="btn btn-outline-secondary botonCarrito btnSC me-3" type="button"><Delete/></button>
                       <Link className='enlaceSC' to={`/product/${itemCart.id}`} > <button className="btn btn-outline-secondary botonCarrito btnSC" type="button">Ver producto</button></Link>
                    </div>
                </div>  
            </article>
            <div className="inputSC col-md-4  col-6 py-3">
                <button onClick={()=>subtractCant(itemCart)}  className="btn btn-outline-secondary btnSubAdd" type="button" id="button-addon1">-</button>
                <div className='inputCant'>
                    <input type="number" className="form-control cantidadInput" placeholder="Cantidad" aria-label="Recipient's username" aria-describedby="button-addon2" value={itemCart.CantidadCompra} readOnly/>
                    <h5>stock disponible {itemCart.cantidad}!</h5>
                </div>
                <button onClick={()=>addCant(itemCart)} className="btn btn-outline-secondary btnSubAdd" type="button" id="button-addon2">+</button>
            </div>
            <div className='col-md-2 col-6'>
               <h2 className='precioSC'>$ {Number(itemCart.CantidadCompra*itemCart.precio)}</h2> 
            </div>
        </section>
        </>
    )
}

export default ItemCart