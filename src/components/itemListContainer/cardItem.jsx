import ButtonList from "./buttonList"
import { Link } from "react-router-dom"


function CardItem({nombre,cantidad,imagen,precio,id}){
    return(
        <>
        <div className="col-lg-3 col-md-4 col-sm-6 tarjetas" >
                <div className="card h-100 hover-zoom">
                    <Link to={`/product/${id}`} >
                        <img src={imagen} className="card-img-top imagenProd" alt="..."/>
                    </Link>
                    <div className="card-body">
                        <h5 className="card-title">{nombre} ${precio}</h5>
                        <ButtonList stock={cantidad}></ButtonList>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Quedan solo {cantidad} unidades!</small>
                    </div>
                </div>
        </div>  
        </>
    )

}

export default CardItem
