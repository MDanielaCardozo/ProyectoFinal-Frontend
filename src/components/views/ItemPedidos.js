import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';

const ItemPedidos = (props) => {
    return (
         <tr>
              <td>{props.producto._id}</td>
              <td>{props.producto.nombre}</td>
              <td>1</td>
              <td>$850</td>
              <td>
              <Button variant="danger"><FontAwesomeIcon className="botont" icon={faTrash}/></Button>{' '}
              </td>
            </tr>
    );
};

export default ItemPedidos;