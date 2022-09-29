import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Card, Row, Col, Badge } from "react-bootstrap";
import "./DetalleProducto.css";

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
          <Modal.Title>Detalle de producto</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark">
        <Card className='container my-5 text-bg-dark'>
            <Row className='w-75'>
                <Col md={6}>
                    <img src='' alt='' className="w-100" />
                </Col>
                <Col md={6} className="py-3">
                <h3></h3>
                <hr/>
                <Badge bg="success"></Badge>
                <p className='m-4'></p>
                <p className='m-4'></p>
                </Col>
            </Row>
        </Card>
        </Modal.Body>
        <Modal.Footer className="bg-dark">
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DetalleProducto;
