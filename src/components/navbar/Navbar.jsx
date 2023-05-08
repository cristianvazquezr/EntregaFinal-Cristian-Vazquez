import './NavBar.css'
import logo from '../images/logo.png';
import CartWidget from '../CartWidget/CartWidget';
import CartWidgetMenu from '../CartWidget/CartWidgetMenu';


function Navbar(){

    return(
        <header className="container">
            {/* <!--Cuando la pantalla es mayor a 920px uso menu desplegado--> */}
            <div className="row encabezado animate__animated animate__slideInDown">
                <div className="col-2 logo-encabezado">
                    <a href="#"><img className="logo" src={logo} alt="Logo del mejor lugar de comidas"/></a>
                </div>
                <div className="col-10">
                    <nav className="barra_navegacion">
                        <ul className="nav nav-tabs navegacion">
                            <li className="nav-item nav_links">
                                <a className="nav-link" aria-current="page" href="#">Inicio</a>
                            </li>
                            <li className="nav-item nav_links dropdown">
                                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Productos</a>
                                <ul className="dropdown-menu submenu-productos">
                                    <li className="nav_links"><a className="dropdown-item" href="#">Carnes</a></li>
                                    <li className="nav_links"><a className="dropdown-item" href="#">Vegetales</a></li>
                                    <li className="nav_links"><a className="dropdown-item" href="#">Pastas</a></li>
                                    <li className="nav_links"><a className="dropdown-item" href="#">Panificacion</a></li>
                                </ul>
                            </li>
                            <li className="nav-item nav_links">
                                <a className="nav-link" href="#">Quienes somos</a>
                            </li>
                            <li className="nav-item nav_links">
                            <a className="nav-link" href="#">Contacto</a>
                            </li>
                        </ul>
                        
                        <CartWidget className_Cart="cartWidget" className='links_iconos'></CartWidget>
                    </nav>
                    <hr />
                </div>    
            </div> 

            {/* Cuando la pantalla es menor a 920px uso menu hamburguesa */}
            <nav className="navbar navbar-light fixed-top menuHamburguesa">
                <div className="container-fluid">
                    <div className="col-2 logo-encabezado">
                        <a href="#"><img className="logo" src={logo} alt="Logo del mejor lugar de comidas"/></a>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <div className="logo-encabezado">
                            <a href="#"><img className="logo-MH" src={logo} alt="Logo del mejor lugar de comidas"/></a>
                        </div>
                        <div className='CardWidget-MH'>
                            <CartWidgetMenu className_Cart="cartWidget" className='links_iconos'></CartWidgetMenu>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                    </div>
                    <div className="offcanvas-body">
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar"/>
                            <button className="btn btn-outline-success" type="submit">Buscar</button>
                        </form>
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Productos
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
                                    <li><a className="dropdown-item" href="#">Carnes</a></li>
                                    <li><a className="dropdown-item" href="#">Vegetales</a></li>
                                    <li><a className="dropdown-item" href="#">Pastas</a></li>
                                    <li><a className="dropdown-item" href="#">Panificacion</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Quienes somos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contacto</a>
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </nav>
        </header>

        
    )
}


export default Navbar