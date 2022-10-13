import React, { useState } from "react";
import { Form, Button, FormSelect, Card } from "react-bootstrap";
import Swal from "sweetalert2";
import Alert from "react-bootstrap/Alert";
import { useNavigate } from "react-router-dom";
import "./AdminCrearProducto.css";
import {
  validarNombre,
  validarDetalle,
  validarPrecio,
  campoRequerido,
  validarUrl,
  validarEstado,
} from "./helperProducto";

const AdminCrearProducto = () => {
  const [nombreProducto, setNombreProducto] = useState("");
  const [precio, setPrecio] = useState(0);
  const [imagen, setImagen] = useState("");
  const [detalleProducto, setDetalleProducto] = useState("");
  const [categoria, setCategoria] = useState("");
  const [estadoProducto, setEstadoProducto] = useState(true);
  const [msjError, setMsjError] = useState(false);

  const URL = process.env.REACT_APP_API_HAMBURGUESERIA;
  const navegacion = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    //validar los datos
    if (
      validarNombre(nombreProducto) &&
      validarPrecio(precio) &&
      validarDetalle(detalleProducto) &&
      validarUrl(imagen) &&
      campoRequerido(categoria)
    ) {
      setMsjError(false);

      console.log("los datos son correctos crear el objeto");
      //crear un objeto
      const nuevoProducto = {
        nombre: nombreProducto,
        precio: precio,
        imagen: imagen,
        categoria: categoria,
        detalle: detalleProducto,
        estado: estadoProducto,
      };
      console.log(nuevoProducto);

      try {
        const respuesta = await fetch(URL + "productos", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-token": JSON.parse(
              localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE)
            ).token,
          },
          body: JSON.stringify(nuevoProducto),
        });
        if (respuesta.status === 201) {
          Swal.fire(
            "Producto creado",
            `El producto ${nuevoProducto.nombre} fue creado correctamente.`,
            "success"
          );
          // Redireccionar a la pagina de administracion
          navegacion("/administrador");
        }
      } catch (error) {
        console.log(error);
        Swal.fire(
          "Error",
          `El producto ${nuevoProducto.nombre} no pudo ser creado.`,
          "error"
        );
      }
    } else {
      setMsjError(true);
    }
  };

  return (
    <section className="imagen px-10 py-10">
      <Card className="card-effect rounded bg-form px-0">
        <div className="bg-dark rounded p-3">
          <h1 className="title-typography text-center text-light m-0">
            Agregar nuevos productos
          </h1>
        </div>
        <Form
          className="container pt-4 text-light formularioProductos"
          onSubmit={handleSubmit}
        >
          <Form.Group className="mb-3">
            <Form.Label>Nombre producto *</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: hamburguesa burguerbeer"
              onChange={(e) => setNombreProducto(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Detalle *</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: hamburguesa especial de burguerandbeer preparada con los mejores ingredientes"
              onChange={(e) => setDetalleProducto(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Precio *</Form.Label>
            <Form.Control
              type="number"
              placeholder="Ej: 900"
              onChange={(e) => setPrecio(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Imagen URL *</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              onChange={(e) => setImagen(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Categoria del producto *</Form.Label>
            <Form.Select onChange={(e) => setCategoria(e.target.value)}>
              <option value="">Seleccione una opcion</option>
              <option value="hamburguesa">hamburguesas</option>
              <option value="cerveza">cervezas</option>
            </Form.Select>
          </Form.Group>
          <Button variant="outline-light" className="mb-3" type="submit">
            Agregar Producto
          </Button>
        </Form>
        {msjError ? (
          <div className="w-100 d-flex justify-content-center">
            <Alert variant="danger" className="mt-3 w-50 text-center">
              Debe corregir los datos.
            </Alert>
          </div>
        ) : null}
      </Card>
    </section>
  );
};

export default AdminCrearProducto;
