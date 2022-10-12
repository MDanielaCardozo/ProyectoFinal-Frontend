import React, { useEffect, useState } from "react";
import { Card, Row, Col, Badge } from "react-bootstrap";
import "./DetalleProducto.css";
import Burger from "../../imgDetalle/burger.jpeg";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const DetalleProducto = () => {
  const { id } = useParams();
  console.log(id);
  const URL = process.env.REACT_API_HAMBURGUESERIA;
  const [producto, setProducto] = useState([]);

  useEffect(() => {
    consultarProd();
  }, []);

  const consultarProd = async () => {
    try {
      const respuesta = await fetch(URL + "/" + id);
      const listarProductos = await respuesta.json();
      setProducto(listarProductos);
    } catch (error) {
      console.log("No pudieron cargarse los productos");
    }
  };

  return (
    <div className="imagenFondo">
      <Card className="container bgCard p-4 mb-3">
        <Row className="w-100">
          <Col md={6}>
            <img src={producto.nombre} alt={producto.nombre} className="w-100 p-3" />
          </Col>
          <Col md={6} className="p-3">
            <h3 className="text-light tituloDetalle">Hamburguesa{producto.nombre}</h3>
            <hr />
            <Badge bg="secondary">{producto.categoria}</Badge>
            <p className="mt-3 text-light">
              <b>Precio: ${producto.precio}</b>
            </p>
            <p className="text-light tipografiaDetalle">
              {producto.descripcion}
            </p>
            <Link to={`*`} className="btn btn-outline-light">
              Agregar al carrito
            </Link>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default DetalleProducto;
