import React, { useEffect } from "react";
import AdministrarClientes from "./AdministrarClientes";
import AdministrarProductos from "./AdministrarProductos";
import "./administrador.css";

const Administrador = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container text-black paddingInicio mb-5">
      <AdministrarProductos />
      <hr />
      <AdministrarClientes />
    </div>
  );
};

export default Administrador;
