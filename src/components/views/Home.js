import React, { useState, useEffect } from "react";
import CarouselHome from "./CarouselHome";
import CardProducto from "./producto/CardProducto";
import { Row, Col, Pagination } from "react-bootstrap";
import Paginacion from "../Paginacion";
import { Link } from "react-router-dom";
import promo1 from "../../img/promo1.jpg";
import promo2 from "../../img/promo2.jpg";
import promo3 from "../../img/promo3.jpg";
import meatgood from "../../img/meatgood.jpg";
import "./Home.css";

const Home = () => {
  const URL = process.env.REACT_APP_API_HAMBURGUESERIA;
  const [productos, setProductos] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const [productosPorPagina, setProductosPorPagina] = useState(4);

  useEffect(() => {
    consultarProd();
  }, []);

  const consultarProd = async () => {
    try {
      const respuesta = await fetch(URL);
      const listaProductos = await respuesta.json();
      setProductos(listaProductos);
    } catch (error) {
      console.log("No pudieron cargarse los productos");
    }
  };

  // Determinacion de productos por pagina
  const indexUltimoProducto = paginaActual * productosPorPagina;
  const indexPrimerProducto = indexUltimoProducto - productosPorPagina;
  const productosActuales = productos.slice(
    indexPrimerProducto,
    indexUltimoProducto
  );

  //Cambiar pagina
  const paginar = (numeroPagina) => {
    setPaginaActual(numeroPagina);
  };

  return (
    <main>
      <section className="promosPpal">
        <Row className="rowBrick w-100 m-0" pagination={Pagination}>
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
      <Row className="rowConocenos w-100 m-0" Pagination>
        <Col sm={12} md={4} className="colConocenos bannerTexto ">
          <div className="w-100 h-100 text-light p-3 text-center text-md-start">
            <h1>Somos expertos</h1>
            <h3>Veni a conocernos</h3>
            <Link to={`/acercaDe`} className="btn">
              Más sobre nosotros
            </Link>
          </div>
        </Col>
        <Col sm={12} md={8} className="colConocenos p-0">
          <img src={meatgood} alt="" className="imgConocenos img-fluid" />
        </Col>
      </Row>
      <section className="sectionMenu">
        <h1 className="titulo">#MENÚ</h1>
        <Row className="w-100 m-0 rowProd">
          {productosActuales.map((producto) => (
            <CardProducto
              key={producto._id}
              producto={producto}
              consultarProd={consultarProd}
            ></CardProducto>
          ))}
        </Row>
        <Paginacion
          productosPorPagina={productosPorPagina}
          totalDeProductos={productos.length}
          paginar={paginar}
        ></Paginacion>
      </section>
    </main>
  );
};

export default Home;
