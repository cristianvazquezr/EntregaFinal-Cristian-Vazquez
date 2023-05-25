import Redes from "../icons/Redes"
import "./Footer.css"
import logo from "../images/Logo.png"
import { Link } from "react-router-dom"
import React from 'react'

function Footer(){

    return (
        <>
            <footer id="footer" className="footer container">
                <div className="row contenedorFooter">
                    <div className="col-lg-5 col-md-4 col-sm-3 col-xs-1">
                        <hr />
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 col-xs-10">
                        <Redes></Redes>
                    </div>
                    <div className="col-lg-5 col-md-4 col-sm-3 col-xs-1">
                        <hr />
                    </div>
                </div>
                <div className="descripcionFooter">
                    <Link to="/"><img src={logo} className="logoFooter" alt="" /></Link> 
                    <h5 className="marca">Christofer</h5>
                </div>
                <p className="copyRight">
                    Copyright &#169; todos los derechos reservados Crvazquez S.A.
                </p>
            </footer>
        </>
    )
}

export default Footer