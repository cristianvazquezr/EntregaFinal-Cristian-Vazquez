import {createContext } from "react";
import { useState } from "react";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';



export const cardContextP=createContext()

function CartContext({children}){

    let [cart,setCart]=useState([])
    let amountCart=0
    amountCart=Object.keys(cart).length

    // funcion para agregar item a la lista
    function addItem(item,cant){
        let agregarObjeto=true
        let newCart=cart.map((obj)=>{
            if (item.id==obj.id){
                if (item.cantidad>obj.CantidadCompra+cant){
                    obj.CantidadCompra=obj.CantidadCompra+cant
                    agregarObjeto=false
                    return obj
                }
                else{
                    notifyStock(item.cantidad-obj.CantidadCompra)
                    agregarObjeto=false
                    return obj
                }
            }
            else{
                return obj
            }
        })
        if (agregarObjeto){
            item['CantidadCompra']=cant
            setCart([...newCart,item])
        }
        else{
            setCart(newCart)
        }
    }

    function addCant(item){
        let newCart=cart.map((obj)=>{
            if (item.id==obj.id){
                if (item.cantidad>=obj.CantidadCompra+1){
                    obj.CantidadCompra=obj.CantidadCompra+1
                    return obj
                }
                else{
                    obj.CantidadCompra=item.cantidad
                    return obj
                }
            }
            else{
                return obj
            }
        })
        setCart(newCart)
    }

    function subtractCant(item){
        let newCart=cart.map((obj)=>{
            if (item.id==obj.id){
                if (item.cantidad<1){
                    obj.CantidadCompra=0
                    return obj
                }
                else{
                    obj.CantidadCompra=obj.CantidadCompra-1
                    return obj
                }
            }
            else{
                return obj
            }
        })
        setCart(newCart)
    }

    function removeObj(item){
        let newCart=cart.filter((obj)=>item.id!=obj.id
        )
        setCart(newCart)
    }


    
    let priceTotal=0
    cart.forEach(obj=>
        priceTotal=obj.CantidadCompra*obj.precio+priceTotal
    )


    function emptyCart(){
        setCart([])
    }




    // mensaje de alerta si se agrego bien al carrito
    function notifyStock(cant){
        const MySwal = withReactContent(Swal)
        if (cant==0){
            MySwal.fire({
                title: <strong>Supera el stock!</strong>,
                html: <i> Ya agregó todo el stock disponible! </i>,
                icon: 'error'
            })

        }
        else{
            MySwal.fire({
                title: <strong>Supera el stock!</strong>,
                html: <i> Solo puede agregar {cant}! </i>,
                icon: 'error'
            })
        }
    }

    //funcion para guardar el usuario de compra


    return(
        <cardContextP.Provider value={{cart,addItem,emptyCart,subtractCant,removeObj,addCant, priceTotal, amountCart}}>{children}</cardContextP.Provider>
    )

}

export default CartContext