import React from "react";
import Button from "react-bootstrap/esm/Button";
import Swal from "sweetalert2";

const ItemCliente = ({cliente, consultarAPI}) => {
  // TRAER AL URL DE LA API
  const URL = process.env.REACT_APP_API_USUARIOS;

  const handleSuspender = (_id) => {
    Swal.fire({
      title: "Desea suspender a este cliente?",
      // text: "No podrás revertir esto",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Suspender",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const parametros = {
            method: "POST",
          };
          const respuesta = await fetch(URL + "/suspender/" + cliente._id, parametros);
          if (respuesta.status === 200) {
            Swal.fire(
              "Cliente suspendido",
              "El cliente fue suspendido con éxito",
              "success"
            );
            // ACÁ CONSULTA A LA API
            consultarAPI();
          }
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "Algo falló",
            text: "Intenta esta acción más tarde",
          });
        }
      }
    });
  }

  const handleDeleteCliente = () => {
    Swal.fire({
      title: "Desea eliminar este usuario?",
      text: "No podrás revertir esto",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Eliminar",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const parametros = {
            method: "DELETE",
          };
          const respuesta = await fetch(URL + "/" + cliente._id, parametros);
          if (respuesta.status === 200) {
            Swal.fire(
              "Eliminado",
              "El cliente fue borrado con éxito",
              "success"
            );
            // ACÁ CONSULTA A LA API
            consultarAPI();
          }
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "Algo falló",
            text: "Intenta esta acción más tarde",
          });
        }
      }
    });
  };

  return (
    <tr>
      <td className="text-black">{cliente.nombre}</td>
      <td className="text-black">{cliente.email}</td>
      <td className="text-black">{cliente.estado?"":"Suspendido"}</td>
      <td className="text-black">{cliente.perfil?"Admin":"Cliente"}</td>
      <td className="text-black"> 
        <Button variant="warning" className="me-1" onClick={()=>{handleSuspender(cliente._id)}}>Suspender</Button>
        <Button variant="danger" type="submit" onClick={handleDeleteCliente} >Eliminar</Button>
      </td>
    </tr>
  );
};

export default ItemCliente;
