import React from "react";
import CarouselHome from "./CarouselHome";
import CardProducto from "./producto/CardProducto";
import { Row, Col, Button } from "react-bootstrap";
import pared from "../../img/purplewall.jpg";
import promo1 from "../../img/promo1.jpg";
import promo2 from "../../img/promo2.jpg";
import promo3 from "../../img/promo3.jpg";
import meatgood from "../../img/meatgood.jpg";
import "./Home.css";

const Home = () => {
  return (
    <main>
      {/* <section className="bannerPromo"> */}
      {/* <img src={promo1} alt="" className="imgPromo" />
        <img src={promo2} alt="" className="imgPromo" />
        <img src={promo3} alt="" className="imgPromo" />
        <img src={pared} alt="" className="fondoBrick" /> */}
      <section className="promosPpal">
        <Row className="rowBrick w-100 m-0">
          <Col sm={12} lg={3} className="colPromo">
            <img src={promo1} alt="" className="imgPromo" />
          </Col>
          <Col sm={12} lg={3} className="colPromo">
            <img src={promo2} alt="" className="imgPromo" />
          </Col>
          <Col sm={12} lg={3} className="colPromo">
            <img src={promo3} alt="" className="imgPromo" />
          </Col>
        </Row>
      </section>

      <section className="carouselPpal">
        <CarouselHome
          promo1={promo1}
          promo2={promo2}
          promo3={promo3}
        ></CarouselHome>
      </section>

      {/* </section> */}
      {/* <section className="bannerConocenos"> */}
      <Row className="rowConocenos w-100 m-0">
        <Col sm={12} md={4} className="colConocenos bannerTexto ">
          <div className="w-100 h-100 text-light p-3 text-center text-md-start">
            <h1>Somos expertos</h1>
            <h3>Veni a conocernos</h3>
            <Button variant="mt-2 outline-light">Más sobre nosotros</Button>
          </div>
        </Col>
        <Col sm={12} md={8} className="colConocenos p-0">
          <img src={meatgood} alt="" className="imgConocenos img-fluid" />
        </Col>
      </Row>
      {/* </section> */}
      <section className="sectionMenu">
        <h1 className="titulo">#MENÚ</h1>
        <Row className="w-100 m-0 rowProd">
          <CardProducto></CardProducto>
          <CardProducto></CardProducto>
          <CardProducto></CardProducto>
          <CardProducto></CardProducto>
          <CardProducto></CardProducto>
          <CardProducto></CardProducto>
          <CardProducto></CardProducto>
          <CardProducto></CardProducto>
        </Row>
      </section>
    </main>
  );
};

export default Home;
