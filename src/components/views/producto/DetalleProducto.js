import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
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
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4 imagenDetalle img-fluid rounded-start"></div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="bg-dark">
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Comprar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DetalleProducto;
