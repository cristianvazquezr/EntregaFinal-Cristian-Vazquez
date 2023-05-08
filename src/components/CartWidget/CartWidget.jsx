import Cart from '../icons/Cart';
import User from '../icons/User';
import Search from '../icons/Serach';
function CartWidget(props){
    return (
        <div className={props.className}>
            <div className="dropdown">
                <i type="button" data-bs-toggle="dropdown" aria-expanded="false"><Search/></i>
                <ul className="dropdown-menu dropdown-menu-dark dropdown-buscar">
                    <form className="d-flex mt-1 formulario-busqueda" role="search">
                        <input className="form-control input-busqueda me-1" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </ul>
            </div>
            <a href="#"><User/></a>
            <a className={props.className_Cart} href="#"><Cart/>
                <span className="carritoVentas badge rounded-pill bg-danger">
                    5
                </span>
            </a>
        </div>
    )
}

export default CartWidget