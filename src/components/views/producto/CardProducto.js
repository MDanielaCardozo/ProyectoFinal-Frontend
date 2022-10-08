import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CardProducto.css";

const CardProducto = (props) => {
  return (
    <Col md={4} xl={3}>
      <Card className="mb-5 cardProd">
        <Card.Img
          variant="top"
          src={props.producto.imagen}
          className="m-0 p-0 cardImg"
        />
        <Card.Body>
          <Card.Title>
            <h2>{props.producto.nombre}</h2>
          </Card.Title>
          <Card.Text className="cardDescrip">
            {props.producto.detalle}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Row className="text-center align-items-center justify-content-around d-flex flex-wrap">
            <Link to={`*`} className="btn btnCard btnCarrito">
              Agregar al carrito
            </Link>
            <Link
             
              to={`/detalleProducto/${props.producto._id}`}
             
              className="btn btnCard mt-1 mt-xl-0 btnVerMas"
            
            >
              Ver más
            </Link>
          </Row>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default CardProducto;
