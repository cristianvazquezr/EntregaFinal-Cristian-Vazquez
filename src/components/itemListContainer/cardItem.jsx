import ButtonList from "./buttonList"
function CardItem(){
    return(
        <>
            <div className="col-4 cardItem">
                <div className="card h-100">
                <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <ButtonList></ButtonList>
                </div>
                <div className="card-footer">
                    <small className="text-muted">Last updated 3 mins ago</small>
                </div>
                </div>
            </div>
        </>
    )

}

export default CardItem