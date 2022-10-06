import React from 'react';
import { Container } from 'react-bootstrap';
import './error.css'
import imagen from "./error404.png"
const Error = () => {
    return (
        <section className='w-100'>
            <h2 className='error'>404</h2>
            <h3 className='error2'> Esta pagina no funciona</h3>
        </section>

    );
};

export default Error;