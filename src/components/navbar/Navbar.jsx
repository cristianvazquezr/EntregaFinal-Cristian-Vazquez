import './NavBar.css'
import logo from '../images/logo.png';
import Cart from '../icons/Cart';
import User from '../icons/User';
import Search from '../icons/Serach';
import CartWidget from '../CartWidget/CartWidget';

function Navbar(){

    return(
        <header class="container">
            {/* <!--Cuando la pantalla es mayor a 920px uso menu desplegado--> */}
            <div class="row encabezado animate__animated animate__slideInDown">
                <div class="col-3 logo-encabezado">
                    <a href="#"><img class="logo" src={logo} alt="Logo del mejor lugar de comidas"/></a>
                </div>
                <div class="col-9">
                    <nav class="barra_navegacion">
                        <ul class="nav nav-tabs navegacion">
                            <li class="nav-item nav_links">
                                <a class="nav-link" aria-current="page" href="#">Inicio</a>
                            </li>
                            <li class="nav-item nav_links dropdown">
                                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Productos</a>
                                <ul class="dropdown-menu submenu-productos">
                                    <li class="nav_links"><a class="dropdown-item" href="#">Carnes</a></li>
                                    <li class="nav_links"><a class="dropdown-item" href="#">Vegetales</a></li>
                                    <li class="nav_links"><a class="dropdown-item" href="#">Pastas</a></li>
                                    <li class="nav_links"><a class="dropdown-item" href="#">Panificacion</a></li>
                                </ul>
                            </li>
                            <li class="nav-item nav_links">
                                <a class="nav-link" href="#">Quienes somos</a>
                            </li>
                            <li class="nav-item nav_links">
                            <a class="nav-link" href="#">Contacto</a>
                            </li>
                        </ul>
                        <CartWidget></CartWidget>
                    </nav>
                </div>    
            </div> 
        </header>
    )
}


export default Navbar