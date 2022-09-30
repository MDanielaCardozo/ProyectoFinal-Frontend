import React from 'react';
import { Container } from 'react-bootstrap';
import './error.css'
import imagen from "./error404.png"
const Error = () => {
    return (
        <Container className='my-5'>
            <h1 className='fs-4 font'> La pagina que estas buscando no pudo ser encontrada</h1>
            <section class="error-container">
                <span><span>4</span></span>
                <span><img src={imagen} alt="hamburguesa mordida" className='imagen'/></span>
                <span><span>4</span></span>
            </section>
        </Container>
    );
};

export default Error;