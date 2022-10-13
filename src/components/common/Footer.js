import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import Logo from '../../img/logoLed.png'
import './Footer.css';

const Footer = () => {
  return (
    <MDBFooter bgColor="dark" className="text-center text-lg-start footerLetra">
      <section className="pt-1">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <img
                alt="Logo del restaurante"
                src={Logo}
                width="170"
                height="auto"
                className="my-0 py-0 ps-auto "
              />
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className=" fw-bold mb-4 fs-5">Conócenos</h6>
              <p><Link to='/' className="fs-6 text-reset subrayado">Contactanos</Link></p>
              <p><Link to='/' className="fs-6 text-reset subrayado">Promociones</Link></p>
              <p><Link to='/' className="fs-6 text-reset subrayado">Informacion legal</Link></p>
              <p><Link to='/' className="fs-6 text-reset subrayado">Terminos y condiciones de uso</Link></p>
              <p><Link to='/' className="fs-6 text-reset subrayado">Politica de privacidad</Link></p>

            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4 text-center">
              <h6 className="fw-bold mb-4 fs-5">Mi cuenta</h6>
              <p><Link to='/' className="fs-6 text-reset subrayado">Mis pedidos</Link></p>
              <p><Link to='/' className="fs-6 text-reset subrayado">Burger points</Link></p>
              <p><Link to='/' className="fs-6 text-reset subrayado">Mi cuenta</Link></p>

            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="fw-bold mb-4 fs-5">Redes sociales</h6>
              <p><Link to='/' className="fs-6 text-reset subrayado"><FontAwesomeIcon icon={faFacebook}/> Facebook</Link></p>
              <p><Link to='/' className="fs-6 text-reset subrayado"><FontAwesomeIcon icon={faInstagram}/> Instagram</Link></p>
              <p><Link to='/' className="fs-6 text-reset subrayado"><FontAwesomeIcon icon={faTwitter}/> Twitter</Link></p>

            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >© Todos los derechos reservados.</div>
    </MDBFooter>
  );
};

export default Footer;

