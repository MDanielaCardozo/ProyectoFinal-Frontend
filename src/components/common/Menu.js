
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser, faCartShopping} from '@fortawesome/free-solid-svg-icons';
import Logo from '../../img/logoLed.png'
import "./Menu.css"

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect className="navbg gradiente mt-0 pt-0" scrolling dark expand="lg" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand  href="#">
            <img
              alt=""
            //   src="https://fontmeme.com/permalink/220927/8e4e471e77dc91efd58b6ff133f81d50.png"
            src={Logo}
              width="150px"
              height="auto"
              className="logoPeq"
            />{' '}
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* <Nav className="me-auto">
            <Nav.Link className="fs-5 pe-5 navLetra" href="#">INICIO</Nav.Link>
            <Nav.Link className="fs-5 navLetra btn mt-1 noselect" href="#">PRODUCTOS</Nav.Link>
          </Nav> */}
          <div>
            <img
              alt=""
            //   src="https://fontmeme.com/permalink/220927/8e4e471e77dc91efd58b6ff133f81d50.png"
            src={Logo}
              width="180"
              height="auto"
              className="my-0 py-0 logoGran"
            />{' '}
          </div>
          <Nav className="ms-auto">
          <Nav.Link className="fs-6 navLetra boton" href="#">INICIO</Nav.Link>
            {/* <Nav.Link className="fs-5 px-3 navLetra btn mt-1 noselect" href="#">PRODUCTOS</Nav.Link> */}
            <Nav.Link className="fs-6 px-3 navLetra boton" href="#">PRODUCTOS</Nav.Link>
            <Nav.Link className="fs-6 navLetra boton" href="#">ADMINISTRACION</Nav.Link>
            <Nav.Link className="fs-6 px-3 navLetra boton" href="#">NOSOTROS</Nav.Link>
            {/* <Nav.Link className="fs-5 mt-1 btn noselect" href="#">LOGIN</Nav.Link> */}
            <Nav.Link className="fs-6 boton" href="#"><FontAwesomeIcon icon={faUser}/></Nav.Link>
            <Nav.Link className="fs-6 boton" href="#"><FontAwesomeIcon icon={faCartShopping}/></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
