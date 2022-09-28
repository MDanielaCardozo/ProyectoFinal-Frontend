import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import pared from "../../img/purplewall.jpg";
import promo1 from "../../img/promo1.jpg";
import promo2 from "../../img/promo2.jpg";
import promo3 from "../../img/promo3.jpg";
import meatgood from "../../img/meatgood.jpg"
import "./Home.css";

const Home = () => {
  return (
    <main>
      <section className="bannerPromo">
        <img src={pared} alt="" className="fondoBrick" />
        <Row className="rowBrick m-0">
          <Col md={3} className="colPromo">
            <img src={promo1} alt="" className="imgPromo" />
          </Col>
          <Col md={3} className="colPromo">
            <img src={promo2} alt="" className="imgPromo" />
          </Col>
          <Col md={3} className="colPromo">
            <img src={promo3} alt="" className="imgPromo" />
          </Col>
        </Row>
      </section>
      <section className="bannerConocenos">
        <Row className="rowConocenos w-100 m-0">
          <Col md={4} className="bannerTexto">
            <div className="ms-5 text-light">
              <h1>Somos expertos</h1>
              <h2>Veni a conocernos</h2>
              <Button variant="outline-info mt-2">Más sobre nosotros</Button>
            </div>
          </Col>
          <Col md={8} className="h-100 m-0 p-0">
            <img src={meatgood} alt="" className="imgConocenos" />
          </Col>
        </Row>
      </section>
    </main>
  );
};

export default Home;
