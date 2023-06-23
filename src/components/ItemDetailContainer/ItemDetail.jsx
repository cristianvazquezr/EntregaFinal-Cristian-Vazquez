import ButtonList from "../itemListContainer/buttonList"
import "./ItemDetail.css"



function ItemDetail({nombre,categoria,origen,descripcion,cantidad,imagen,precio,producto}){


    return(
        <>  
            <div className="card mb-3 cardDetail">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={imagen} className="img-fluid rounded-start imagenDetail" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h2 className="card-title">{nombre} ${precio}</h2>
                            <p className="card-text">CATEGORIA: {categoria}</p>
                            <p className="card-text">ORIGEN: {origen}</p>
                            <p className="card-text">{descripcion}</p>
                            <p className="card-text"><small className="text-muted">Stock disponible {cantidad}!</small></p>
                            <ButtonList stock={cantidad} item={producto}></ButtonList>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default ItemDetail
