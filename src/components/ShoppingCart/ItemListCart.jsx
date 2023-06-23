import ItemCart from "./ItemCart"

function ItemListCart({productos}){

    return(
        <>
            {productos.map((items)=>(
                <div className="container" key={items.id}>
                    <ItemCart
                        itemCart={items}
                    />
                    <hr />
                </div>
                )
                ) 
            }
        </>
    
    )
}

export default ItemListCart