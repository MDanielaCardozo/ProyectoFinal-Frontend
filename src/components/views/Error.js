import React from 'react';
import { Container } from 'react-bootstrap';
import './error.css'
import imagen from "../../img/purplewall.jpg"
const Error = () => {
    return (
        <section className='fondo'>
            <div className="logo"><b><span>4</span>0<span>4</span></b></div>
            <h3 className='notfound'> Esta pagina no funciona</h3>
        </section>

    );
};

export default Error;