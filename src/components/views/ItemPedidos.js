import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';

const ItemPedidos = ({producto, quitarProducto}) => {
    return (
         <tr>
              <td className='itemPedido'>{producto._id}</td>
              <td className='itemPedido'>{producto.nombre}</td>
              <td className='itemPedido'>1</td>
              <td className='itemPedido'>{producto.precio}</td>
              <td>
              <Button variant="danger" onClick={()=>{quitarProducto(producto)}}><FontAwesomeIcon className="botont" icon={faTrash}/></Button>{' '}
              </td>
            </tr>
    );
};

export default ItemPedidos;