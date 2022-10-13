import React, { useEffect } from "react";
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
      <h3 className="notfound"> Esta pagina no funciona</h3>
    </section>
  );
};

export default Error;
