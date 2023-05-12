import './itemListCont.css'
import CardItem from './cardItem'
import comidas from '../../../data/productos'
function ItemList(){
    return(
        <div className="itemListCont">

            {comidas.map((items)=>{<CardItem
                key={items.id}
                productTitle={items.nombre}
                ProductDescription={items.descripcion}
                stock={items.cantidad}
                imageLink={items.imagen}
            />})
            }      
        </div>
    )
}

export default ItemList