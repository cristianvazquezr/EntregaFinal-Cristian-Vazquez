import CardItem from "./cardItem"

function ItemList({productos}){
    return(
        <>
            {productos.map((items)=>(
                <CardItem
                    key={items.id}
                    id={items.id}
                    nombre={items.nombre}
                    descripcion={items.descripcion}
                    cantidad={items.cantidad}
                    imagen={items.imagen}
                    precio={items.precio}
                />))
            }
        </>
    )
}

export default ItemList