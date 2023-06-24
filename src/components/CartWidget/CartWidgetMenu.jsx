import { useContext, useEffect, useState } from 'react';
import Cart from '../icons/Cart';
import User from '../icons/User';
import { Link } from 'react-router-dom';
import { cardContextP } from '../Context/CartContext';
import './cartWidget.css'


function CartWidgetMenu({className,className_Cart,valorCarrito}){
    let[usuario,setUsuario]=useState({usuario:"",password:""})
    let {amountCart}=useContext(cardContextP)
    let userSS = sessionStorage.getItem("Usuario")
    useEffect(()=>{
        if(JSON.parse(userSS)==null){
            setUsuario({usuario:"",password:""})
        }else{setUsuario(JSON.parse(userSS))}
       },[])

    return (
        <div className={className}>
            <Link className='loginUsu' to="Login"><User/>{usuario.usuario=!''?<span>{usuario.usuario}</span>:<></>}</Link>
            <Link className={className_Cart} to="cart">
                <Cart/>
                {amountCart==0?
                <></>:<span className="carritoVentas badge rounded-pill bg-danger">
                {valorCarrito}
            </span>
                }
            </Link>
        </div>
    )
}

export default CartWidgetMenu