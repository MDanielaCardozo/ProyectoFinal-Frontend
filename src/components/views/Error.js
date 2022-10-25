import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./error.css";
const Error = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="fondo">
      <div className="logo">
        <b>
          <span>4</span>0<span>4</span>
        </b>
      </div>
      <div className="container-notfound">
        <h3 className="notfound">No se encontro lo que estas buscando</h3>
        <Link to="/" className="btn btn-dark bg-black my-3 botonVolver">Volver a inicio</Link>
      </div>
    </section>
  );
};

export default Error;
