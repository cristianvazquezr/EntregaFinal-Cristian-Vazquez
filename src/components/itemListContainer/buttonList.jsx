function ButtonList(){
    return(
        <>
        <div className='buttonList'>
        
            <div className="input-group mb-3">
                <button className="btn btn-outline-secondary" type="button" id="button-addon1">-</button>
                <input type="text" className="form-control" placeholder="Cantidad" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                <button className="btn btn-outline-secondary" type="button" id="button-addon2">+</button>
            </div>
        </div>
        </>
    )
}

export default ButtonList