import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import ItemProducto from "./ItemProducto";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AdministrarProductos = () => {
    const URL = process.env.REACT_APP_API_HAMBURGUESERIA;

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        consultarAPI();
    }, []);

    const consultarAPI = async () => {
        try {
            const respuesta = await fetch(URL+'productos');
            const listaProductos = await respuesta.json();
            setProductos(listaProductos);
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Algo falló",
                text: "Intenta esto más tarde",
            });
        }
    };

    return (
        <div>
            <div className="d-flex justify-content-between">
                <p className="text-black">Lista de productos</p>
                <Link
                    to="/crearProducto"
                    className="btn btn-primary mb-2">
                    Agregar producto
                </Link>
            </div>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th className="text-black">ID</th>
                        <th className="text-black">Nombre producto</th>
                        <th className="text-black">Estado</th>
                        <th className="text-black">Precio</th>
                        <th className="text-black">Descripción</th>
                        <th className="text-black">Categoría</th>
                        <th className="text-black">Imagen</th>
                        <th className="text-black">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map((producto) => (
                        <ItemProducto key={producto._id} producto={producto} consultarAPI={consultarAPI}></ItemProducto>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default AdministrarProductos;
