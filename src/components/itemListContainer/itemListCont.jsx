import './itemListCont.css'
function ItemList(props){
    return(
        <div className="itemListCont">
            <h1>{props.saludo}</h1>
        </div>
    )
}

export default ItemList