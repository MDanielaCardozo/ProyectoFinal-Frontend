import React from 'react';
import AdministrarClientes from './AdministrarClientes';
import AdministrarProductos from './AdministrarProductos';

const Administrador = () => {
    return (
        <div>
            {/* NAVBAR */}
            <AdministrarProductos />
            <AdministrarClientes />
            {/* FOOTER */}
        </div>
    );
};

export default Administrador;