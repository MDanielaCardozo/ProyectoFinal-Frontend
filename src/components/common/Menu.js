import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser, faCartShopping} from '@fortawesome/free-solid-svg-icons';
import Logo from '../../img/logoLed.png'
import {NavLink} from 'react-router-dom';
import "./Menu.css"

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect className="navbg gradiente mt-0 pt-0" expand="lg" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand  href="#">
            <img
              alt=""
            src={Logo}
              width="100px"
              height="auto"
              className="logoPeq"
            />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <div>
            <img
              alt="Logo del restaurante"
            src={Logo}
              width="100"
              height="auto"
              className="my-0 py-0 logoGran"
            />
          </div>
          <Nav className="ms-auto">
          <NavLink to='/' className='nav-item nav-link fs-6 px-3 navLetra boton text-end'>INICIO</NavLink>
          <NavLink end to='/acercaDe' className='nav-item nav-link fs-6 px-3 navLetra boton text-end'>ACERCA DE</NavLink>
          <NavLink end to='/administrador' className='nav-item nav-link fs-6 px-3 navLetra boton text-end'>ADMINISTRACION</NavLink>
          <NavLink end to='/login' className='nav-item nav-link fs-6 px-3 navLetra boton text-end'><FontAwesomeIcon icon={faUser}/></NavLink>
          <NavLink end to='/pedidos' className='nav-item nav-link fs-6 px-3 navLetra boton text-end'><FontAwesomeIcon icon={faCartShopping}/></NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;