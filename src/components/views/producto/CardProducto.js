import React, { useState } from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CardProducto.css";
import DetalleProducto from "./DetalleProducto";

const CardProducto = (props) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
    <Col md={4} xl={3} className="mb-5">
      <Card className="h-100 cardProd">
        <Card.Img
          variant="top"
          src={props.producto.imagen}
          className="m-0 p-0 cardImg"
        />
        <Card.Body className="cardProdBody">
          <Card.Title className="m-0">
            <h2 className="m-0">{props.producto.nombre}</h2>
          </Card.Title>
          <div className="w-100">
            <hr className="mt-2"></hr>
            <Card.Subtitle>
              <h2 className="mb-0 cardPrecio">${props.producto.precio}</h2>
            </Card.Subtitle>
          </div>
        </Card.Body>
        <Card.Footer>
          <Row className="text-center align-items-center justify-content-around d-flex flex-wrap">
            <Link to={`*`} className="btn btnCard btnCarrito">
              Agregar al carrito
            </Link>
            <Button
              className="btn btnCard mt-1 mt-xl-0 btnVerMas"
              type="submit"
              onClick={handleShow}
            >
              Ver más
            </Button>
          </Row>
        </Card.Footer>
      </Card>
    </Col>
    <DetalleProducto show={show} handleClose={handleClose}/>
    </>
  );
};

export default CardProducto;
