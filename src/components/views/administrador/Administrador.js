import React from 'react';
import AdministrarClientes from './AdministrarClientes';
import AdministrarProductos from './AdministrarProductos';
import "./administrador.css"

const Administrador = () => {
    return (
        <div className="container text-black paddingInicio mb-5">
            
            <AdministrarProductos />
            <AdministrarClientes />
        </div>
    );
};

export default Administrador;