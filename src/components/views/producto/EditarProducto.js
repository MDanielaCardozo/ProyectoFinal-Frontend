import { React, useEffect, useState, useRef } from "react";
import { Form, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";
import {
  validarNombre,
  validarDetalle,
  validarPrecio,
  campoRequerido,
  validarUrl,
} from "../administrador/helperProducto";
import Swal from "sweetalert2";
import Alert from "react-bootstrap/Alert";
import "../administrador/AdminCrearProducto.css";

const EditarProducto = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState({});
  const URL = process.env.REACT_APP_API_HAMBURGUESERIA;
  const navegacion = useNavigate();
  const nombreProductoRef = useRef("");
  const precioRef = useRef(0);
  const imagenRef = useRef("");
  const detalleRef = useRef("");
  const [msjError, setMsjError] = useState(false);

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    try {
      const respuesta = await fetch(URL + "productos/" + id);
      const dato = await respuesta.json();
      setProducto(dato);
    } catch (error) {
      console.log(error);
      
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    if (
      validarNombre(nombreProductoRef.current.value) &&
      validarPrecio(precioRef.current.value) &&
      validarDetalle(detalleRef.current.value) &&
      validarUrl(imagenRef.current.value) &&
      campoRequerido(producto.categoria)
    ) {
     
      const productoEditar = {
        nombre: nombreProductoRef.current.value,
        imagen: imagenRef.current.value,
        precio: precioRef.current.value,
        categoria: producto.categoria,
        detalle: detalleRef.current.value,
        estado: true,
      };
      

      try {
        const respuesta = await fetch(URL + "productos/" + id, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(productoEditar),
        });

        if (respuesta.status === 200) {
          Swal.fire(
            "Producto editado",
            `El producto ${producto.nombre} fue modificado correctamente.`,
            "success"
          );
        }
      } catch (error) {
        console.log(error);
        Swal.fire(
          "Error",
          `El producto ${producto.nombre} no pudo ser modificado.`,
          "error"
        );
      }
      navegacion("/administrador");
    } else {
      setMsjError(true);
    }
  };

  return (
    <section className="imagen px-10 py-10">
      <Card className="card-effect rounded bg-form px-0 d-flex justify-content-center">
        <div className="bg-dark rounded p-3">
          <h1 className="title-typography text-center text-light m-0">
            Editar producto
          </h1>
        </div>
        <Form className="container pt-4 text-light formularioProductos" onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Nombre producto *</Form.Label>
            <Form.Control
              type="text"
              required
              defaultValue={producto.nombre}
              ref={nombreProductoRef}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Detalle *</Form.Label>
            <Form.Control
              type="text"
              defaultValue={producto.detalle}
              ref={detalleRef}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Precio *</Form.Label>
            <Form.Control
              type="number"
              required
              defaultValue={producto.precio}
              ref={precioRef}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Imagen URL *</Form.Label>
            <Form.Control
              type="text"
              required
              defaultValue={producto.imagen}
              ref={imagenRef}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Categoria del producto *</Form.Label>
            <Form.Select
              required
              value={producto.categoria}
              onChange={(e) =>
                setProducto({ ...producto, categoria: e.target.value })
              }
            >
              <option value="">Seleccione una opcion</option>
              <option value="hamburguesa">hamburguesas</option>
              <option value="cerveza">cervezas</option>
            </Form.Select>
          </Form.Group>
          <Button variant="outline-light" className="mb-3" type="submit">
            Editar
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

export default EditarProducto;
