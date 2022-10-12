import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Card, Row, Col, Badge } from "react-bootstrap";
import "./DetalleProducto.css";
import Burger from "../../imgDetalle/burger.jpeg";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const DetalleProducto = ({ show, handleClose }) => {
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
    <div>
      <Modal show={show} onHide={handleClose} className="">
        <Modal.Body className="modalDetalle">
          <Card className="container my-5 text-bg-dark">
            <Row className="w-100 py-3">
              <Col md={6}>
                <img src={Burger} alt={producto.nombre} className="modalImg" />
              </Col>
              <Col md={6} className="mt-2">
                <h4 className="tituloDetalle">{producto.nombre}Hamburguesa</h4>
                <hr />
                {/* <Badge className="azul bg-secondary">
                  {producto.categoria}
                </Badge> */}
                <p className="my-2">{producto.descripcion}fjskfhskjggh</p>
                <p className="my-2">Precio: ${producto.precio}</p>
              </Col>
            </Row>
          </Card>
          <Button variant="outline-light m-1" onClick={handleClose}>
            Cerrar
          </Button>
          <Link
            to={`*`}
            className="btn btn-outline-light"
            onClick={handleClose}
          >
            Agregar al carrito
          </Link>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default DetalleProducto;
