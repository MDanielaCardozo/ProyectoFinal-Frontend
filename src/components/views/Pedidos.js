import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import ItemPedidos from "./ItemPedidos";
import { useNavigate } from "react-router-dom";
import "./Pedidos.css";

const Pedidos = () => {
    const navigate = useNavigate();
    let total = 0;
    const URL = process.env.REACT_APP_API_HAMBURGUESERIA;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const productosPedido = JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE_PRODUCTOS_PEDIDO)) || [];
    const usuario = JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE)) || { nombre: "anonimo!!" };
    const [listaProductosPedido, setListaProductosPedido] = useState(productosPedido);

    const quitarProducto = (producto) => {
        let nuevaLista = listaProductosPedido.filter((item) => {
            return item._id !== producto._id;
        });
        setListaProductosPedido(nuevaLista);
        localStorage.setItem(process.env.REACT_APP_LOCALSTORAGE_PRODUCTOS_PEDIDO, JSON.stringify(nuevaLista));
        Swal.fire("Producto eliminado", "El producto fue quitado del pedido", "success");
    };

    const guardarPedido = async () => {
        try {
            let productosPedido = [];
            total = 0;
            listaProductosPedido.forEach((element) => {
                total += element.precio;
                element.cantidad = 1;
                productosPedido.push(element);
            });

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
                productosdelmenu: [...productosPedido],
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

    const borrarCarrito = () =>{
        let carritoBorrado = listaProductosPedido
        console.log(carritoBorrado.pop())
        for (let i = carritoBorrado.length; i > 0; i--) {
            carritoBorrado.pop();
          }
          localStorage.setItem(process.env.REACT_APP_LOCALSTORAGE_PRODUCTOS_PEDIDO, JSON.stringify(carritoBorrado));
        setListaProductosPedido([]);
        Swal.fire("Carrito vaciado", "Los productos fueron quitados del pedido", "success");
    }

    const handleClick = () => {
        total = 0;
        listaProductosPedido.forEach((element) => {
            total += element.precio;
        });

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
                            <th>Item</th>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Precio</th>
                            <th>Accion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listaProductosPedido.map((producto) => (
                            <ItemPedidos key={producto._id} producto={producto} quitarProducto={quitarProducto}></ItemPedidos>
                        ))}
                    </tbody>
                </Table>
                <div className="text-end">
                    <Button variant="danger" className="mt-3 me-3 text-light" onClick={borrarCarrito}>Borrar carrito</Button>
                    <Button variant="primary" className="mt-3" onClick={handleClick}>
                        Proceder a pagar
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Pedidos;
