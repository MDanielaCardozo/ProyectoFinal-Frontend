import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import ItemPedidos from "./ItemPedidos";
import { useNavigate } from "react-router-dom";
import "./Pedidos.css";
import { formatMoneda } from "../helperCarrito";

const Pedidos = () => {
    const navigate = useNavigate();
    const URL = process.env.REACT_APP_API_HAMBURGUESERIA;
    
    useEffect(() => {
        actualizarTotal(listaProductosPedido);
        window.scrollTo(0, 0);
    }, []);
    
    const productosPedidoTemp = JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE_PRODUCTOS_PEDIDO)) || [];
    const usuario = JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE)) || { nombre: "anonimo!!" };
    const [listaProductosPedido, setListaProductosPedido] = useState(productosPedidoTemp);
    const [total, setTotal] = useState(0);

    const actualizarTotal=(lista)=>{
        let subTotal = 0;
        lista.map((item)=>subTotal += item.precio * item.cantidad);
        setTotal(subTotal);
    }

    const quitarProducto = (producto) => {
        Swal.fire({
            title: "Esta seguro?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, eliminar",
            cancelButtonText: "Cancelar",
        }).then((result) => {
            if (result.isConfirmed) {
                let nuevaLista = listaProductosPedido.filter((item) => {
                    return item._id !== producto._id;
                });
                actualizarTotal(nuevaLista);
                setListaProductosPedido(nuevaLista);
                localStorage.setItem(process.env.REACT_APP_LOCALSTORAGE_PRODUCTOS_PEDIDO, JSON.stringify(nuevaLista));
                Swal.fire("Producto eliminado", "El producto fue quitado del pedido", "success");
            }
        });
    };

    const restarUno = (producto) => {
        let i = listaProductosPedido.findIndex((item) => {
            return item._id === producto._id;
        });
        if (i>=0 && listaProductosPedido[i].cantidad>1) 
        {
            listaProductosPedido[i].cantidad--;
            actualizarTotal(listaProductosPedido);
            localStorage.setItem(process.env.REACT_APP_LOCALSTORAGE_PRODUCTOS_PEDIDO, JSON.stringify(listaProductosPedido));
        }
    }

    const sumarUno = (producto) => {
        let i = listaProductosPedido.findIndex((item) => {
            return item._id === producto._id;
        });
        if (i>=0) 
        {
            listaProductosPedido[i].cantidad++;
            actualizarTotal(listaProductosPedido);
            localStorage.setItem(process.env.REACT_APP_LOCALSTORAGE_PRODUCTOS_PEDIDO, JSON.stringify(listaProductosPedido));
        }
    }

    const guardarPedido = async () => {
        try {
            const today = new Date();
            let day = today.getDate();
            if (day < 10) day = "0" + day;
            let month = today.getMonth();
            if (month < 10) month = "0" + month;
            let year = today.getFullYear();
            year = year % 100;
            let fecha = `${day}/${month}/${year}`;

            const pedidos = {
                usuario: usuario.nombre,
                fecha,
                productosdelmenu: [...listaProductosPedido],
                estado: false, // false=PENDIENTE
            };
            console.log(pedidos);
            const respuesta = await fetch(URL + "pedidos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(pedidos),
            });
            console.log(respuesta);
            const data = await respuesta.json();
            console.log(data);
            if (respuesta.status === 201) {
                localStorage.setItem(process.env.REACT_APP_LOCALSTORAGE_PRODUCTOS_PEDIDO, JSON.stringify([]));
                setListaProductosPedido([]);
                navigate("/");

                Swal.fire("Perfecto!", "Su pedido esta siendo preparado!", "success");
            } else {
                Swal.fire("Ups!", "Ha ocurrido un error, intente nuevamente", "error");
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleClick = () => {
        actualizarTotal(listaProductosPedido);

        Swal.fire({
            title: "Esta seguro?",
            text: `Total a pagar :$ ${total}`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, pagar!",
            cancelButtonText: "Cancelar",
        }).then((result) => {
            if (result.isConfirmed) {
                guardarPedido();
            }
        });
    };

    return (
        <div className="fondo text-center text-dark carrito">
            <h1 className="text-light bg-dark container rounded-top mb-0 p-3">CARRITO DE COMPRAS</h1>
            <div className="tabla container py-3 mb-5">
                <Table striped responsive>
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Precio</th>
                            <th>Sub-total</th>
                            <th>Accion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listaProductosPedido.map((producto) => (
                            <ItemPedidos key={producto._id} producto={producto} quitarProducto={quitarProducto} restarUno={restarUno} sumarUno={sumarUno}></ItemPedidos>
                        ))}
                    </tbody>
                </Table>
                <p>Total: {formatMoneda(total)}</p>
                <div className="text-end">
                    <Button variant="primary" className="mt-3" onClick={handleClick}>
                        Proceder a pagar
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Pedidos;
