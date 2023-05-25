import React, { Component } from 'react';
import {FaWhatsapp, FaFacebook,FaInstagram,FaPhone,FaEnvelope} from "react-icons/fa";


function Redes(){
    return  (
        <>
        <div className='iconosRedes'>
            <a  target="_blank" href="https://wa.me/+545316123456"><FaWhatsapp/></a>
            <a  target="_blank" href="https://www.instagram.com/cristianvazquezr/"><FaInstagram/></a>
            <a  target="_blank" href="https://www.facebook.com/cristian.vazquez.338"><FaFacebook/></a>
            <a  target="_blank" href="tel:+346785678766"><FaPhone/></a>
            <a  target="_blank" href="mailto:elcorreoquequieres@correo.com"><FaEnvelope/></a>
        </div>
        </>
    ) 
}


export default Redes;
