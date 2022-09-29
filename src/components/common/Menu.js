import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";
// import { NavLink, Link } from "react-router-dom";
import Logo from "../../img/logoLed.png";
import "./Menu.css";

function CollapsibleExample() {
  return (
      <Navbar
      collapseOnSelect
      className="navbg mt-0 pt-0 navD container-fluid d-flex px-5 pt-3"
      scrolling
      dark
      expand="lg"
      variant="dark"
      // fixed="top"
    >
      <Navbar.Brand href="#">
          <img
            alt="logo de hamburguesa led"
            src={Logo}
            width="150px"
            height="auto"
            className="logoPeq me-auto"
          />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        {/* <div className="d-flex justify-content-between container mt-3"></div> */}
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-between">
          <div>
            <img
              alt="Logo de hamburguesa led responsive"
              src={Logo}
              width="180"
              height="auto"
              className="my-0 py-0 logoGran"
            />
          </div>
          <Nav className="">
          {/* <NavLink to='' className='nav-item nav-link fs-6 boton navLetra '>INICIO</NavLink>
          <NavLink to='' className='nav-item nav-link fs-6 boton navLetra ps-3'>PRODUCTOS</NavLink>
          <NavLink to='' className='nav-item nav-link fs-6 boton navLetra '> ADMINISTRACION</NavLink>
          <NavLink to='' className='nav-item nav-link fs-6 boton navLetra ps-3'>NOSOTROS</NavLink>
          <NavLink to='' className='nav-item nav-link fs-6 boton navLetra '><FontAwesomeIcon icon={faUser} /></NavLink>
          <NavLink to='' className='nav-item nav-link fs-6 boton navLetra '><FontAwesomeIcon icon={faCartShopping} /></NavLink> */}
            <Nav.Link className="fs-6 navLetra boton" href="#">INICIO</Nav.Link>
            <Nav.Link className="fs-6 px-3 navLetra boton" href="#">PRODUCTOS</Nav.Link>
            <Nav.Link className="fs-6 navLetra boton" href="#">ADMINISTRACION</Nav.Link>
            <Nav.Link className="fs-6 px-3 navLetra boton" href="#">NOSOTROS</Nav.Link>
            <Nav.Link className="fs-6 boton" href="#"><FontAwesomeIcon icon={faUser} /></Nav.Link>
            <Nav.Link className="fs-6 boton" href="#"><FontAwesomeIcon icon={faCartShopping} /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
        
    </Navbar>
    
  );
}

export default CollapsibleExample;
