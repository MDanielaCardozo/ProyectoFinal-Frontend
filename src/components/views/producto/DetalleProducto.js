import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Card, Row, Col, Badge } from "react-bootstrap";
import "./DetalleProducto.css";
import Burger from '../../imgDetalle/burger.jpeg'

const DetalleProducto = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="bg-dark text-light">
          <Modal.Title className="azul">Detalle de producto</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark">
          <Card className="container my-5 text-bg-dark">
            <Row className="w-100">
              <Col md={6}>
                <img src={Burger} alt='' className=" imagen" />
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
