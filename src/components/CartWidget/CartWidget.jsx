import Cart from '../icons/Cart';
import User from '../icons/User';
import Search from '../icons/Serach';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { cardContextP } from '../Context/CartContext';
import './CartWidget.css'

function CartWidget({valorCarrito, className,className_Cart}){

    let[usuario,setUsuario]=useState({usuario:"",password:""})
    let {amountCart}=useContext(cardContextP)
    let userSS = sessionStorage.getItem("Usuario")
    useEffect(()=>{
        if(JSON.parse(userSS)==null){
            setUsuario({usuario:"",password:""})
        }else{
            setUsuario(JSON.parse(userSS))}
    },[])

    return (
        <div className={className}>
            <div className="dropdown">
                <i type="button" data-bs-toggle="dropdown" aria-expanded="false"><Search/></i>
                <ul className="dropdown-menu dropdown-menu-dark dropdown-buscar">
                    <form className="d-flex mt-1 formulario-busqueda" role="search">
                        <input className="form-control input-busqueda me-1" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </ul>
            </div>
            <Link className='loginUsu' to="Login">
                <User/>
                {(usuario.usuario)=!''?<span>{usuario.usuario}</span>:
                <></>}
            </Link>
            <Link className={className_Cart} to="cart"><Cart/>
            {amountCart==0?
                <></>:<span className="carritoVentas badge rounded-pill bg-danger">
                {valorCarrito}
            </span>
                }
            </Link>
        </div>
    )
}

export default CartWidget