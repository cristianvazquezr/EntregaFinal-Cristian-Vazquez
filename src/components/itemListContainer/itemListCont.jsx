import './itemListCont.css'
import ItemList from './ItemList';
import comidas from '../../../data/productos'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';



function getData(){
    let promesa=new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(comidas)            
        }, 2000);
    })
    return promesa
}


function ItemListCont(){

    let[productos,getProductos ]=useState([])
    let[busqueda, getbusqueda]=useState(0)
    let {categoria}=useParams()
    console.log(categoria)
    

    
    const handleChange=(event)=>{
        getbusqueda(event.target.value)
    }


    useEffect(()=>{

        getData().then((respuesta)=>{
            if (busqueda ==0){
                if(categoria==undefined){
                    getProductos(respuesta)
                }
                else{
                    getProductos(respuesta.filter(items=>items.categoria==categoria))
                }
            }
            else{

                if(categoria==undefined){
                    getProductos(respuesta.filter(comidas=>comidas.nombre.toLowerCase().includes(busqueda.toLowerCase())))
                }
                else{
                    getProductos((respuesta.filter(comidas=>comidas.nombre.toLowerCase().includes(busqueda.toLowerCase()))).filter(items=>items.categoria==categoria))
                }
            }
        
        })

    },[busqueda,categoria])

    return(
        <div className='container'>
            <h5>Filtro</h5>
                <input type="text" id='filtro' onChange={handleChange} />
            <div className="itemListCont row">
                <ItemList productos={productos}/>
            </div>
        </div>
    )
}

export default ItemListCont