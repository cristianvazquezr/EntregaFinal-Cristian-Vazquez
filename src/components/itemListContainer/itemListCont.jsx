import './ItemListContasasd.css'
import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AnimationPreloader from '../AnimationPreloader/AnimationPreloader';
import { getData, getDatafilter } from '../../services/firebases';
import empty from '../images/empty.png'


function ItemListCont(){

    let[productos,getProductos ]=useState([])
    let[busqueda, getbusqueda]=useState(0)
    let {categoria}=useParams()
    let [loading, setLoading]=useState(false)
    
    
    
    const handleChange=(event)=>{
        getbusqueda(event.target.value)
    }


    useEffect(()=>{
        getData().then((respuesta)=>{getProductos(respuesta)})

        if (busqueda == 0){
            if(categoria==undefined){
                getData().then((respuesta)=>{
                    getProductos(respuesta)
                    setLoading(true)
                })
            }
            else{
                getDatafilter(categoria).then((respuesta)=>{
                    getProductos(respuesta)
                    setLoading(true)
                })
            }
        }
        else{
            if(categoria==undefined){
                getData().then((respuesta)=>{
                    getProductos(respuesta.filter(comidas=>comidas.nombre.toLowerCase().includes(busqueda.toLowerCase())))
                    setLoading(true)
                })  
            }
            else{
                getDatafilter(categoria).then((respuesta)=>{
                    getProductos(respuesta.filter(comidas=>comidas.nombre.toLowerCase().includes(busqueda.toLowerCase())))
                    setLoading(true)
                })
            }
        }
        

    },[busqueda,categoria])

    return(
        <>
        {loading?
            productos.length!=0?
                <div className='container'>
                    <div className='filtro'>
                        <input type="text" id='filtro' defaultValue='Busqueda' onChange={handleChange} onClick={()=>{filtro.value=''}} />
                    </div>
                    <div className="itemListCont row">
                        <ItemList productos={productos}/>
                    </div>
                </div>
                :
                <div className='categoriaVacia container'>
                    <img className='imgVacia' src={empty} alt="" />
                    <h5>No existen productos para la categoria elegida</h5>
                </div>
            :<AnimationPreloader/>
        }
        </>
        
    )
}

export default ItemListCont