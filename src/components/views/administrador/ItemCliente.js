import React from "react";
import Button from "react-bootstrap/esm/Button";
import Swal from "sweetalert2";

const ItemCliente = (cliente, consultarAPI) => {
  const { idCliente, nombreCliente, mail, contrasena, estado, perfil } = {
    ...cliente
  };

  // TRAER AL URL DE LA API
//   const URL = 

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
          const respuesta = await fetch(URL + "/" + idCliente, parametros);
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
    <div>
      <tr>
        <td>1</td>
        <td>Otto Krautmann</td>
        <td>otto@gmail.com</td>
        <td>Otto1234</td>
        <td>Activo</td>
        <td>ni idea que va en perfil</td>
        <td>
          <Button variant="warning">Suspender</Button>
          <Button variant="danger" type="submit" onclick={handleDeleteCliente}>
            Eliminar
          </Button>
        </td>
      </tr>
      
      {/* <tr>
            <td>{idCliente}</td>
            <td>{nombreCliente}</td>
            <td>{mail}</td>
            <td>{contrasena}</td>
            <td>{estado}</td>
            <td>{perfil}</td>
            <td> */}
      {/* <Button variant="warning">Suspender</Button> */}
      {/* <Button variant="danger" type="submit" onclick={handleDeleteCliente} >Eliminar</Button> */}
      {/* </td>
          </tr> */}
    </div>
  );
};

export default ItemCliente;
