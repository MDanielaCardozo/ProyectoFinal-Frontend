import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import ItemProducto from "./ItemProducto";
import { Link } from "react-router-dom";

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
      <div>
        <p>Lista de productos</p>

        {/* ¡¡¡¡¡¡AGREGAR REDIRECCION AL BOTON DE AGREGAR PRODUCTO!!!!!! */}

        <Link
          //  to="/crearProducto"
          className="btn btn-primary"
        >
          Agregar producto
        </Link>
      </div>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre producto</th>
            <th>Estado</th>
            <th>Precio</th>
            <th>Descripción</th>
            <th>Categoría</th>
            <th>Imagen</th>
            <th>Acciones</th>
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
            consultarAPI = {consultarAPI}
            />
          ))} */}
        </tbody>
      </Table>
    </div>
  );
};

export default AdministrarProductos;
