import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Card, Row, Col, Badge } from "react-bootstrap";
import "./DetalleProducto.css";
import Burger from '../../imgDetalle/burger.jpeg'
import { useParams } from "react-router";
import { async } from "q";

const DetalleProducto = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {id} = useParams();
  console.log(id);
  const URL = process.env.REACT_APP_API_HAMBURGUESERIA;
  const [producto, setProducto] = useState({});

  useEffect(() => {
    consultarAPI();
  }, [])
  
  const consultarAPI = async () => {
    try {
        const respuesta = await fetch(URL+'/'+id);
        const dato = await respuesta.json();
        setProducto(dato);

    } catch (error) {
        console.log(error)
    }
  }

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
      <Modal show={show} onHide={handleClose} className="">
        <Modal.Header closeButton className="bg-dark text-light">
          <Modal.Title className="azul">Detalle de producto</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark">
          <Card className="container my-5 text-bg-dark">
            <Row className="w-100 py-3">
              <Col md={6}>
                <img src={producto.imagen} alt='' className=" imagen" />
              </Col>
              <Col md={6} className="">
                <h4>Hamburguesa</h4>
                <hr />
                <Badge className="azul bg-secondary">Promo 1</Badge>
                <p className="m-4">hyyfftyhbgkkjhyggvfgcdcghggfv</p>
                <p className="m-4"></p>
              </Col>
            </Row>
          </Card>
        </Modal.Body>
        <Modal.Footer className="bg-dark">
          <Button
            variant="outline-light"
            className="azul"
            onClick={handleClose}
          >
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DetalleProducto;
