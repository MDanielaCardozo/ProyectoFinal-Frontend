import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import promo3 from "../../../img/promo3.jpg";
import hambur from "../../../img/hamburcheddar.jpg";

const CardProducto = (props) => {
  return (
    <Col md={3}>
      <Card>
        <Card.Img variant="top" src={hambur} />
        <Card.Body>
          <Card.Title>
            <h2>Pizza napolitana</h2>
          </Card.Title>
          <Card.Text>Pizza napolitana con masa madre</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Row className="text-center">
            <Col>
              <h3 className="m-0"></h3>
            </Col>
            <Col>
              <Link to={`/detalleProducto`} className="btn btn-danger">
                Ver más
              </Link>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default CardProducto;
