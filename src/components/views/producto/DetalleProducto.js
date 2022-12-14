import React, { useEffect, useState } from "react";
import { Card, Row, Col, Badge, Button } from "react-bootstrap";
import "./DetalleProducto.css";
import { useNavigate, useParams } from "react-router-dom";
import { agregarCarrito } from "../helperCarrito";

const DetalleProducto = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const URL = process.env.REACT_APP_API_HAMBURGUESERIA;
  const [producto, setProducto] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    consultarProd();
  }, []);

  const consultarProd = async () => {
    try {
      const respuesta = await fetch(URL + "productos/" + id);
      const listarProductos = await respuesta.json();
      setProducto(listarProductos);
    } catch (error) {
      console.log("No pudieron cargarse los productos");
    }
  };

  const agregarProducto = (producto) => {
    if (!agregarCarrito(producto)) {
      navigate('/login')
    } 
  }

  return (
    <div className="imagenFondo">
      <Card className="container bgCard p-4 mb-3">
        <Row className="w-100">
          <Col md={6}>
            <img src={producto.imagen} alt={producto.nombre} className="w-100 p-3 imagenDetalle" />
          </Col>
          <Col md={6} className="p-3">
            <h3 className="text-light tituloDetalle">{producto.nombre}</h3>
            <hr />
            <Badge bg="secondary">{producto.categoria}</Badge>
            <p className="mt-3 text-light">
              <b>Precio: ${producto.precio}</b>
            </p>
            <p className="text-light tipografiaDetalle">
              {producto.detalle}
            </p>
            <Button className='btn btn-outline-light' onClick={()=>{agregarProducto(producto)}}>Agregar al carrito</Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default DetalleProducto;
