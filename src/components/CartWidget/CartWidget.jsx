import Cart from '../icons/Cart';
import User from '../icons/User';
import Search from '../icons/Serach';
import { Link } from 'react-router-dom';

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
            <Link to="/"><User/></Link>
            <Link className={props.className_Cart} to="/"><Cart/>
                <span className="carritoVentas badge rounded-pill bg-danger">
                    {props.valorCarrito}
                </span>
            </Link>
        </div>
    )
}

export default CartWidget