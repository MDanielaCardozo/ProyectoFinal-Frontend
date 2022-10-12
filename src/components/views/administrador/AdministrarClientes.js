import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import ItemCliente from "./ItemCliente";
import Swal from "sweetalert2";

const AdministrarClientes = () => {
  // ¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡TRAER URL DE LA API!!!!!!!!
  // const URL =

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
    <div>
      <p className="text-black">Lista de clientes</p>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th className="text-black">ID</th>
            <th className="text-black">Nombre</th>
            <th className="text-black">Mail</th>
            <th className="text-black">Contraseña</th>
            <th className="text-black">Estado</th>
            <th className="text-black">Perfil</th>
            <th className="text-black">Acciones</th>
          </tr>
        </thead>
        <tbody className="text-black">
          {clientes.map((cliente) => (
            <ItemCliente
              key={cliente.idCliente}
              cliente={cliente}
              consultarAPI={consultarAPI}
            />
          ))}
          <ItemCliente />
        </tbody>
      </Table>
    </div>
  );
};

export default AdministrarClientes;
