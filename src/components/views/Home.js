import React, { useState, useEffect } from "react";
import CarouselHome from "./CarouselHome";
import CardProducto from "./producto/CardProducto";
import { Row, Col, Pagination, Form } from "react-bootstrap";
import Paginacion from "../Paginacion";
import { Link, useSearchParams } from "react-router-dom";
import promo1 from "../../img/promo1.jpg";
import promo2 from "../../img/promo2.jpg";
import promo3 from "../../img/promo3.jpg";
import meatgood from "../../img/meatgood.jpg";
import "./Home.css";

const Home = () => {
  const URL = process.env.REACT_APP_API_HAMBURGUESERIA;
  const [productos, setProductos] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const [productosPorPagina, setProductosPorPagina] = useState(8);
  const element = document.querySelector(".sectionMenu");
  const [productosBuscados, setProductosBuscados] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    consultarProd();
  }, []);

  const consultarProd = async () => {
    try {
      const respuesta = await fetch(URL + "productos");
      const listaProductos = await respuesta.json();
      setProductos(listaProductos);
      setProductosBuscados(listaProductos);
    } catch (error) {
      console.log("No pudieron cargarse los productos");
    }
  };

  // Cambiar pagina
  const paginar = (numeroPagina) => {
    setPaginaActual(numeroPagina);
    element.scrollIntoView();
  };

  const buscar = (buscado) => {
    const productosSearch = [];
    productos.forEach((producto) => {
      if (producto.nombre.toLowerCase().includes(buscado)) {
        productosSearch.push(producto);
      }
    });
    setProductosBuscados(productosSearch);
    console.log(productosBuscados);
  };

  // Determinacion de productos por pagina
  const indexUltimoProducto = paginaActual * productosPorPagina;
  const indexPrimerProducto = indexUltimoProducto - productosPorPagina;
  const productosActuales = productosBuscados.slice(
    indexPrimerProducto,
    indexUltimoProducto
  );

  return (
    <main>
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
      <Row className="rowConocenos w-100 m-0">
        <Col sm={12} md={4} className="colConocenos">
          <div className="w-100 h-100 text-light p-md-3 p-5 text-center text-md-start">
            <h1>Somos expertos</h1>
            <h3>Veni a conocernos</h3>
            <Link to={`/acercaDe`} className="btn" preventScrollReset={true}>
              Más sobre nosotros
            </Link>
          </div>
        </Col>
        <Col sm={12} md={8} className="colConocenos p-0">
          <img src={meatgood} alt="" className="imgConocenos img-fluid" />
        </Col>
      </Row>
      <section className="sectionMenu">
        <h1 className="tituloMenu w-100">#MENÚ</h1>
        <Form className="w-50 mb-5 buscadorProd">
          <Form.Control
            type="text"
            placeholder="Buscar producto"
            onChange={(e) => buscar(e.target.value)}
          />
        </Form>
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
          totalDeProductos={productosBuscados.length}
          paginar={paginar}
        ></Paginacion>
      </section>
      <section className="sectionFinal text-center w-100 m-0">
        <h1 className="m-0 w-100">SOMOS #BURGERHOUSE</h1>
        <h2 className="m-0 ">
          Veni a disfrutar con nosotros de alta hamburguesa!
        </h2>
        <h4 className="mt-3">Te esperamos</h4>
      </section>
    </main>
  );
};

export default Home;
