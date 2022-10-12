import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import ItemProducto from "./ItemProducto";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AdministrarProductos = () => {
  // ¡¡¡¡¡¡ TRAER URL DE LA API !!!!!!!
  // const URL =

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    try {
      const respuesta = await fetch(URL);
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

        {/* ¡¡¡¡¡¡AGREGAR REDIRECCION AL BOTON DE AGREGAR PRODUCTO!!!!!! */}

        <Link
          //  to="/crearProducto"
          className="btn btn-primary mb-2"
        >
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

          {/* ¡¡¡¡¡¡ ELIMINAR LA ETIQUETA DE ABAJO AL UNIR EL BACKEND!!!! */}
          <ItemProducto />

          {/* ¡¡¡¡¡¡¡DESCOMENTAR EL COMENTARIO DE ABAJO AL UNIR EL BACKEND!!!!  */}

          {/* {productos.map((producto)=>(
            <ItemProducto
            key = {producto.idProducto}
            producto = {producto}
            consultarAPI = {consultarAPI}></ ItemProducto>
          ))} */}
        </tbody>
      </Table>
    </div>
  );
};

export default AdministrarProductos;
