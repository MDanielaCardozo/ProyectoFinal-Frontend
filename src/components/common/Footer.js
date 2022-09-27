import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import './Footer.css';

const Footer = () => {
  return (
    <MDBFooter bgColor="dark" className="text-center text-lg-start footerLetra">
      <section className="pt-1">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <img
                alt=""
                src="https://fontmeme.com/permalink/220927/8e4e471e77dc91efd58b6ff133f81d50.png"
                width="200"
                height="auto"
                className="my-0 py-0 pe-4"
              />{" "}
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className=" fw-bold mb-4 fs-5">Conócenos</h6>
              <p><a href="#" className="fs-6 text-reset subrayado">Contactanos</a></p>
              <p><a href="#" className="fs-6 text-reset subrayado">Promociones</a></p>
              <p><a href="#" className="fs-6 text-reset subrayado">Informacion legal</a></p>
              <p><a href="#" className="fs-6 text-reset subrayado">Terminos y condiciones de uso</a></p>
              <p><a href="#" className="fs-6 text-reset subrayado">Politica de privacidad</a></p>

            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="fw-bold mb-4 fs-5">Mi cuenta</h6>
              <p><a href="#" className="fs-6 text-reset subrayado">Mis pedidos</a></p>
              <p><a href="#" className="fs-6 text-reset subrayado">Burger points</a></p>
              <p><a href="#" className="fs-6 text-reset subrayado">Mi cuenta</a></p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="fw-bold mb-4 fs-5">Redes sociales</h6>
              <p><a href="#" className="fs-6 text-reset subrayado"><FontAwesomeIcon icon={faFacebook}/> Facebook</a></p>
              <p><a href="#" className="fs-6 text-reset subrayado"><FontAwesomeIcon icon={faInstagram}/> Instagram</a></p>
              <p><a href="#" className="fs-6 text-reset subrayado"><FontAwesomeIcon icon={faTwitter}/> Twitter</a></p>
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
