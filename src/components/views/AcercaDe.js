import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./AcercaDe.css";
import Fran from "../imgNosotros/FranAnd.jpg";
import Dani from "../imgNosotros/DanielaC.jpg";
import Mauro from "../imgNosotros/MauroGarcia.jpg";
import Juan from "../imgNosotros/JuanMeni.png";
import Vale from "../imgNosotros/ValentinaO.jpg";
import Carlos from "../imgNosotros/Carlos.jpg";
import Nico from "../imgNosotros/Nico.jpg";
import Otto from "../imgNosotros/otto.png";
import { Link } from "react-router-dom";

const AcercaDe = () => {
  return (
    <div className="imagenFondo">
      <Carousel className="mt-5 container carousel">
        <Carousel.Item className="carouselUno"></Carousel.Item>
        <Carousel.Item className="carouselDos"></Carousel.Item>
        <Carousel.Item className="carouselTres"></Carousel.Item>
      </Carousel>
      <article className="articulo text-center container table-responsive">
        <h2 className="azul my-5">JUNTOS SOMOS BURGER HOUSE</h2>
        <p className="text-light">
          Somos una experiencia de hospitalidad y gastronomía en constante
          movimiento. Empezamos en 2003, creando el primer Burger House local.
          Desde entonces, nos dedicamos a cocinar tus platillos favoritos,
          recibiéndote siempre, en un ambiente casual y divertido. Cada día,
          seleccionamos los mejores ingredientes de proveedores locales y
          extranjeros responsables con el medio ambiente. Trabajamos en equipo
          para tocar positivamente la vida de nuestros compañeros e invitados
          con procesos seguros, excelente servicio y pasión culinaria. Nos mueve
          aprender, enseñar y descubrir para crecer. Creemos en aprovechar lo
          que recibimos para convertirlo en algo mejor. Sobre todas las cosas,
          siempre queremos que la pases bien comiendo y bebiendo delicioso con
          nosotros. Descubre todo nuestro menú sorprendiéndote con algo nuevo
          cada vez.
        </p>
      </article>
      <section className="equipo text-center">
        <h2 className="gris pt-5">Unete al equipo</h2>
        <p className="text-light">
          ¿Te gustaría formar parte del equipo de Burger House? ¡Trabaja con
          nosotros!. @burgerhouse
        </p>
        <Link to={'/*'} className='btn btn-outline-light'>Unite</Link>
      </section>
      <section className="evento text-center">
        <h2 className="gris pt-5">Tenes un evento</h2>
        <p className="text-light">Cotiza con nosotros. @burgerhouse</p>
        <Link to={'/*'} className='btn btn-outline-light'>Información</Link>
      </section>
      <section className="container text-center">
        <h3 className="titulo text-light my-4">Nosotros</h3>
        <Row xs={1} sm={2} md={4} className="g-4 mb-4">
          <Col>
            <Card>
              <Card.Img variant="top" src={Fran} className='nosotrosFoto'/>
              <Card.Body className="bg-dark">
              <Card.Link href="https://github.com/franAndrad" className="gris tipografiaCard">Andrade Francisco</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
            <Card.Img variant="top" src={Nico} className='nosotrosFoto'/>
              <Card.Body className="bg-dark">
              <Card.Link href="https://github.com/nicolasandr" className="gris tipografiaCard">Andrade Nicolas</Card.Link>  
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
            <Card.Img variant="top" src={Dani} className='nosotrosFoto'/>
              <Card.Body className="bg-dark">
              <Card.Link href="https://github.com/MDanielaCardozo" className="gris tipografiaCard">Cardozo Daniela</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
            <Card.Img variant="top" src={Carlos} className='nosotrosFoto'/>
              <Card.Body className="bg-dark">
              <Link href="https://github.com/carlosmsx" className="gris tipografiaCard">Escobar Carlos</Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row xs={1} sm={2} md={4} className="g-4 mb-5">
          <Col>
            <Card>
            <Card.Img variant="top" src={Mauro} className='nosotrosFoto'/>
              <Card.Body className="bg-dark">
              <Card.Link href="https://github.com/Ao-Rubi" className="gris tipografiaCard">Garcia Mauro Nicolás</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={Otto} className='nosotrosFoto'/>
              <Card.Body className="bg-dark">
              <Card.Link href="https://github.com/OttoKrautmann" className="gris tipografiaCard">Krautmann Otto</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={Juan} className='nosotrosFoto'/>
              <Card.Body className="bg-dark">
              <Card.Link href="https://github.com/JuanMeni" className="gris tipografiaCard">Menichetti Juan</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={Vale} className='nosotrosFoto'/>
              <Card.Body className="bg-dark">
              <Card.Link href="https://github.com/valeormaechea" className="gris tipografiaCard">Ormaechea Valentina</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default AcercaDe;
