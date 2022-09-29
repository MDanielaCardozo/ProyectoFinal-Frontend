import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "./AcercaDe.css";

const AcercaDe = () => {
  return (
    <div className="container-f">
      <Carousel className="mt-5 container">
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
        <h2 className="gris">Unete al equipo</h2>
        <p className="text-light">¿Te gustaría formar parte del equipo de Burger House? ¡Trabaja con nosotros!. @burgerhouse</p>
      </section>
      <section className="evento mb-5 text-center">
        <h2 className="gris">Tenes un evento</h2>
        <p className="text-light">Cotiza con nosotros. @burgerhouse</p>
      </section>
      <section className="container text-center">
        <h3 className="azul mb-4">Nosotros</h3>
        <Row xs={1} md={4} className="g-4 mb-4">
        <Col>
          <Card className="cardUno">
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="cardUno">
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="cardUno">
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="cardUno">
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
    </Row>
    <Row xs={1} md={4} className="g-4 mb-5">
        <Col>
          <Card className="cardDos">
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="cardDos">
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="cardDos">
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="cardDos">
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      
    </Row>
      </section>
        
    </div>
  );
};

export default AcercaDe;
