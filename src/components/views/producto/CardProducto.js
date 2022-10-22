import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./CardProducto.css";
import { agregarCarrito } from "../helperCarrito";

const CardProducto = (props) => {
  const navigate = useNavigate();
  const agregarProducto = (producto) => {
    console.log(producto);
    if ( !agregarCarrito(producto)) {
      navigate("/login");
      console.log('pasa')
    }
  }

  return (
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
            <Link to={`/`} className="btn btnCard btnCarrito" onClick={()=>{agregarProducto(props.producto)}}>
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
