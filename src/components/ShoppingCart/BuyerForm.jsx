


function BuyerForm({handleConfirm,handleChange}){



    return (
    <>
        <form className="formularioCompra" onSubmit={handleConfirm}>
            <legend>Formulario de compra 
                <hr />
            </legend>
            <label htmlFor='nombre'> Nombre: </label>
            <input onChange={handleChange} type='text' name='nombre' id='nombre' placeholder='Nombre'/>
            <label htmlFor='apellido'> Apellido: </label>
            <input onChange={handleChange} type='text' name='apellido' id='apellido' placeholder='Apellido'/>
            <label htmlFor='numeroTelefono'> Teléfono: </label>
            <input onChange={handleChange} type='tel' name='numeroTelefono' id='numeroTelefono' placeholder='3516816757'/>
            <label htmlFor='email'> Correo electrónico: </label>
            <input onChange={handleChange} type='email' name='email' id='email' placeholder='correo@correo.com'/>
            <div className="contenedorBoton container">
                <button className="btn btn-outline-success btnFin" type="submit">FINALIZAR COMPRA</button>
            </div>
        </form>
    </>
)
}

export default BuyerForm