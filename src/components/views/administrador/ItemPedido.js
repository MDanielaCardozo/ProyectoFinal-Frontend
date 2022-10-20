import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Button from 'react-bootstrap/esm/Button';
import ItemPedidoLista from './ItemPedidoLista';
import Accordion from 'react-bootstrap/Accordion';

const ItemPedido = ({ pedido, consultarAPI }) => {
    // TRAER AL URL DE LA API
    const URL = process.env.REACT_APP_API_HAMBURGUESERIA;
    const [estado, setestado] = useState(false);

    const handleEntregado = (_id) => {
        Swal.fire({
            title: 'El pedido fue entregado?',
            // text: "No podrás revertir esto",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Si',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const parametros = {
                        method: 'POST',
                    };
                    const respuesta = await fetch(
                        URL + 'entregado/' + pedido._id,
                        parametros
                    );
                    if (respuesta.status === 200) {
                        Swal.fire(
                            'Pedido entregado',
                            'El pedido fue entregado con éxito',
                            'success'
                        );
                        setestado(true);
                        // ACÁ CONSULTA A LA API
                        consultarAPI();
                    }
                } catch (error) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Algo falló',
                        text: 'Intenta esta acción más tarde',
                    });
                }
            }else setestado(false);
        });
    };
    return (
        <tr>
            <td className="text-black">
                <div className="truncate">
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Pedido</Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                    {pedido.productosdelmenu.map(
                                        (pedido, posicion) => (
                                            <ItemPedidoLista
                                                key={posicion}
                                                pedido={pedido}
                                            ></ItemPedidoLista>
                                        )
                                    )}
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </td>
            <td className="text-black">{pedido.usuario}</td>
            <td className="text-black">{pedido.fecha}</td>
            <td className="text-black">
                {pedido.estado ? 'Entregado' : 'Pendiente'}
            </td>
            <td className="text-black">
                <div className="d-flex justify-content-center">
                    {estado ? (
                        <Button
                            variant="success"
                            type="submit"
                            onClick={handleEntregado}
                        >
                            Entregado
                        </Button>
                    ) : (
                        <Button
                            variant="danger"
                            type="submit"
                            onClick={handleEntregado}
                        >
                            Pendiente
                        </Button>
                    )}
                </div>
            </td>
        </tr>
    );
};

export default ItemPedido;
