import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';

const ItemPedidos = ({producto, quitarProducto}) => {
    return (
         <tr>
              <td>{producto._id}</td>
              <td>{producto.nombre}</td>
              <td>1</td>
              <td>{producto.precio}</td>
              <td>
              <Button variant="danger" onClick={()=>{quitarProducto(producto)}}><FontAwesomeIcon className="botont" icon={faTrash}/></Button>{' '}
              </td>
            </tr>
    );
};

export default ItemPedidos;