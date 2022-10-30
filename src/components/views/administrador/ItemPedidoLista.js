import React from 'react';

const ItemPedidoLista = (props) => {
    return <li>{props.pedido.cantidad} {props.pedido.nombre}</li>;
};

export default ItemPedidoLista;
