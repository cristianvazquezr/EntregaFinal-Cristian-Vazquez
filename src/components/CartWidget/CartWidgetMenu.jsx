import Cart from '../icons/Cart';
import User from '../icons/User';
import { Link } from 'react-router-dom';


function CartWidgetMenu(props){
    return (
        <div className={props.className}>
            <Link to="#"><User/></Link>
            <Link className={props.className_Cart} to="#"><Cart/>
                <span className="carritoVentas badge rounded-pill bg-danger">
                    {props.valorCarrito}
                </span>
            </Link>
        </div>
    )
}

export default CartWidgetMenu