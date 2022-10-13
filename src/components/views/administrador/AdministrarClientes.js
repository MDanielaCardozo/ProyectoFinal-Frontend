import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import ItemCliente from "./ItemCliente";
import Swal from "sweetalert2";

const AdministrarClientes = () => {
  const URL = process.env.REACT_APP_API_USUARIOS;

  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    try {
      const respuesta = await fetch(URL);
      const listaClientes = await respuesta.json();
      setClientes(listaClientes);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Algo falló",
        text: "Intenta esto más tarde",
      });
    }
  };

  return (
    <div className="mt-4">
      <h1 className="text-black">Lista de clientes</h1>
      <Table striped bordered hover responsive >
        <thead>
          <tr>
            <th className="text-black">Nombre</th>
            <th className="text-black">Email</th>
            <th className="text-black">Estado</th>
            <th className="text-black">Perfil</th>
            <th className="text-black">Acciones</th>
          </tr>
        </thead>
        <tbody className="text-black">
          {clientes.map((cliente) => (
            <ItemCliente
              key={cliente._id}
              cliente={cliente}
              consultarAPI={consultarAPI}
            />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AdministrarClientes;
