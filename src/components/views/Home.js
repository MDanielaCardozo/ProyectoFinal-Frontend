import React from "react";
import { Row, Col } from "react-bootstrap";
import pared from "../../img/purplewall.jpg";
import imgPared1 from "../../img/manohambur.jpg";
import imgPared2 from "../../img/platohambur.jpg";
import imgPared3 from "../../img/meatgood.jpg";
import "./Home.css";

const Home = () => {
  return (
    <main>
      <section className="bannerPromo">
        <img src={pared} alt="" className="fondoBrick" />
        <Row className="rowBrick">
          <Col md={3} className="colPromo">
            <img src={imgPared1} alt="" className="imgPromo" />
          </Col>
          <Col md={3} className="colPromo">
            <img src={imgPared3} alt="" className="imgPromo" />
          </Col>
          <Col md={3} className="colPromo">
            <img src={imgPared2} alt="" className="imgPromo" />
          </Col>
        </Row>
      </section>
    </main>
  );
};

export default Home;
