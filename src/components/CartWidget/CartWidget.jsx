import Cart from '../icons/Cart';
import User from '../icons/User';
import Search from '../icons/Serach';
function CartWidget(){
    return (
        <div class="links_iconos">
            <div class="dropdown">
                <i type="button" data-bs-toggle="dropdown" aria-expanded="false"><Search/></i>
                <ul class="dropdown-menu dropdown-menu-dark dropdown-buscar">
                    <form class="d-flex mt-1 formulario-busqueda" role="search">
                        <input class="form-control input-busqueda me-1" type="search" placeholder="Search" aria-label="Search"/>
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </ul>
            </div>
            <a href="#"><i><User/> </i></a>
            <a href="#"><i><Cart/>
                <span class="position-absolute top-20 start-95 translate-middle badge rounded-pill bg-danger carritoVentas">
                    5
                </span>
            </i></a>
        </div>
    )
}

export default CartWidget