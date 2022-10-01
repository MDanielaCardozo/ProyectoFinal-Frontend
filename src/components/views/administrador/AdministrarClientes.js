import React, {useState, useEffect} from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import ItemCliente from "./ItemCliente";
import Swal from "sweetalert2";

const AdministrarClientes = () => {
  // ¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡TRAER URL DE LA API!!!!!!!!
  // const URL =

  const [clientes, setClientes] = useState([]);

  useEffect(()=>{
    consultarAPI();
  },[])

  const consultarAPI = async () =>{
    try {
      const respuesta = await fetch (URL);
      const listaClientes = await respuesta.json();
      setClientes(listaClientes);
    }catch (error){
      Swal.fire({
        icon: "error",
        title: "Algo falló",
        text: "Intenta esto más tarde",
      });
    }
  }

  return (
    <div>
        <p>Lista de clientes</p>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Mail</th>
            <th>Contraseña</th>
            <th>Estado</th>
            <th>Perfil</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>          
          {clientes.map((cliente) =>(
            <ItemCliente
            key={cliente.idCliente}
            cliente = {cliente}
            consultarAPI = {consultarAPI}
            />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AdministrarClientes;
