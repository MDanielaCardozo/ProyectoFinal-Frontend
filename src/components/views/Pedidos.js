import React from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import "./Pedidos.css";

const Pedidos = () => {
  return (
    <div className="fondo text-center text-dark">
      <h1 className="display-3 text-light">CARRITO DE COMPRAS</h1>
      <div className="tabla container py-3">
        <Table striped bordered responsive>
          <thead>
            <tr>
              <th>Item</th>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio</th>
              <th>Accion</th>
            </tr>
          </thead>
          <tbody>
            {/* ejemplo */}
            <tr>
              <td>1</td>
              <td>CheesBurger</td>
              <td>1</td>
              <td>$850</td>
              <td>
              <Button variant="danger"><FontAwesomeIcon className="botont" icon={faTrash}/></Button>{' '}
              </td>
            </tr>
          </tbody>
        </Table>
          <div className="text-end">
          <Button variant="primary" className='mt-3'>Proceder a pagar</Button>
          </div>
      </div>
    </div>
  );
};

export default Pedidos;
