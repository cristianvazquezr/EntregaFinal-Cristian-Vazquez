import Cart from '../icons/Cart';
import User from '../icons/User';
import Search from '../icons/Serach';
function CartWidgetMenu(props){
    return (
        <div className={props.className}>
            <a href="#"><User/></a>
            <a className={props.className_Cart} href="#"><Cart/>
                <span className="carritoVentas badge rounded-pill bg-danger">
                    5
                </span>
            </a>
        </div>
    )
}

export default CartWidgetMenu