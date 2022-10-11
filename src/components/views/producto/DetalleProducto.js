import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Card, Row, Col, Badge } from "react-bootstrap";
import "./DetalleProducto.css";
import Burger from "../../imgDetalle/burger.jpeg";
import { useParams } from "react-router";

const DetalleProducto = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
      <Button variant="primary" onClick={handleShow} className='btnModal'>
        Launch demo modal
      </Button>
      <Modal show={show} onHide={handleClose} className="">
        <Modal.Body className="modalDetalle">
          <Card className="container my-5 text-bg-dark">
            <Row className="w-100 py-3">
              <Col md={6}>
                <img
                  src={Burger}
                  // alt={producto.nombre}
                   className="imagen"
                />
              </Col>
              <Col md={6} className="">
                <h4>{producto.nombre}</h4>
                <hr />
                <Badge className="azul bg-secondary">
                  {producto.categoria}
                </Badge>
                <p className="m-4">{producto.descripcion}</p>
                <p className="m-4">Precio: ${producto.precio}</p>
              </Col>
            </Row>
          </Card>
          <Button
            variant="outline-light me-3"
            className="azul"
            onClick={handleClose}
          >
            Cerrar
          </Button>
          <Button
            variant="outline-light"
            className="azul"
            onClick={handleClose}
          >
            Comprar
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default DetalleProducto;
