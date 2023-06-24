import { useEffect, useState } from "react"
import "./Login.css"
import { Link } from "react-router-dom"
function Login(){

    

    let[user,setUsuario]=useState({
        usuario:"",
        password:""
    })
   let userSS = sessionStorage.getItem("Usuario")
   useEffect(()=>{
    setUsuario(JSON.parse(userSS))
   },[])
   
  


    function handleChange(event){
        let valor=event.target.value
        let elemento= event.target.name
        let newUsuario={...user}
        newUsuario[elemento]=valor
        setUsuario(newUsuario)
        console.log(newUsuario)
    }
    function confirmUser(event){
        event.preventDefault
        sessionStorage.setItem("Usuario",JSON.stringify(user))
    }

    function logOut(){
        sessionStorage.clear("Usuario")
        location.reload()
    }
    

    
    if (userSS==null){
        return(
            <div>
                <div id="contenedorcentrado">
                    <div id="login">
                        <form id="loginform" onSubmit={confirmUser}>
                            <label htmlFor="usuario">Usuario</label>
                            <input onChange={handleChange} id="usuario" type="text" name="usuario" placeholder="Usuario" required/>
                            <label htmlFor="password">Contraseña</label>
                            <input onChange={handleChange} id="password" type="password" placeholder="Contraseña" name="password" required/>
                            <button type="submit" title="Ingresar" name="Ingresar">Login</button>
                        </form>
                    </div>
                    <div id="derecho">
                        <div className="titulo">
                            Bienvenido
                        </div>
                        <hr/>
                        <div className="pie-form">
                            <a href="#">¿Perdiste tu contraseña?</a>
                            <a href="#">¿No tienes Cuenta? Registrate</a>
                            <hr />
                            <Link to="/">« Volver</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }else{
        return(
            <div id="contenedorcentrado">
                <div id="derecho">
                    <div className="titulo">
                    <h3>Bienvenido {user.usuario}</h3>
                    </div>
                    <hr/>
                    <div className="pie-form">
                        <p>En nuestra tienda vas a encontrar lo mejor en comidas!</p>
                        <hr />
                        <Link to="/">« Volver</Link>
                        <Link onClick={logOut}>LogOut</Link>
                    </div>
                </div>
            </div>
        )

    }
        
}

export default Login