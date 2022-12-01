import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import Swal from "sweetalert2";
import Alert from "react-bootstrap/Alert";
import { useNavigate } from "react-router-dom";
import "./AdminCrearProducto.css";
import { encontrarErrores } from "./helperProducto";

const AdminCrearProducto = () => {
  const [producto, setProducto] = useState({});
  const [msjError, setMsjError] = useState(false);
  const [errors, setErrors] = useState({});
  producto.estado = true;
  const URL = process.env.REACT_APP_API_HAMBURGUESERIA;
  const navegacion = useNavigate();

  const setAtributo = (atributo, valor) => {
    setProducto({
      ...producto,
      [atributo]: valor,
    });

    if (!!errors[atributo])
      setErrors({
        ...errors,
        [atributo]: null,
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (producto.detalle === undefined) {
      producto.detalle = "";
    }

    if (producto.categoria === undefined) {
      producto.categoria = "";
    }

    if (producto.nombre === undefined) {
      producto.nombre = "";
    }

    const newErrors = encontrarErrores(producto);
    if (Object.keys(newErrors).length > 0) {
      setMsjError(true);
      setErrors(newErrors);
      return;
    }

    setMsjError(false);

    try {
      const respuesta = await fetch(URL + "productos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-token": JSON.parse(
            localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE)
          ).token,
        },
        body: JSON.stringify(producto),
      });
      if (respuesta.status === 201) {
        Swal.fire(
          "Producto creado",
          `El producto ${producto.nombre} fue creado correctamente.`,
          "success"
        );
        navegacion("/privado/administrador");
      }
    } catch (error) {
      Swal.fire(
        "Error",
        `El producto ${producto.nombre} no pudo ser creado.`,
        "error"
      );
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
              onChange={(e) => setAtributo("nombre", e.target.value)}
              isInvalid={!!errors.nombre}
            />
            <Form.Control.Feedback type="invalid">
              {errors.nombre}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Detalle *</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: hamburguesa especial de burguerandbeer preparada con los mejores ingredientes"
              onChange={(e) => setAtributo("detalle", e.target.value)}
              isInvalid={!!errors.detalle}
            />
            <Form.Control.Feedback type="invalid">
              {errors.detalle}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Precio *</Form.Label>
            <Form.Control
              type="number"
              placeholder="Ej: 900"
              onChange={(e) => setAtributo("precio", e.target.value)}
              isInvalid={!!errors.precio}
            />
            <Form.Control.Feedback type="invalid">
              {errors.precio}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Imagen URL *</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              onChange={(e) => setAtributo("imagen", e.target.value)}
              isInvalid={!!errors.imagen}
            />
            <Form.Control.Feedback type="invalid">
              {errors.imagen}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Categoria del producto *</Form.Label>
            <Form.Select
              onChange={(e) => setAtributo("categoria", e.target.value)}
              isInvalid={!!errors.categoria}
            >
              <option value="">Seleccione una opcion</option>
              <option value="hamburguesa">hamburguesas</option>
              <option value="cerveza">cervezas</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {errors.categoria}
            </Form.Control.Feedback>
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
