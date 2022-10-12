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
    
      <tr>
        <td className="text-black">1</td>
        <td className="text-black">Otto Krautmann</td>
        <td className="text-black">otto@gmail.com</td>
        <td className="text-black">Otto1234</td>
        <td className="text-black">Activo</td>
        <td className="text-black">ni idea que va en perfil</td>
        <td className="text-black">
          <Button variant="warning" className="me-1">Suspender</Button>
          <Button variant="danger" type="submit" onclick={handleDeleteCliente}>
            Eliminar
          </Button>
        </td>
      </tr>
      
      
      // {/* <tr>
      //       <td className="text-black">{idCliente}</td>
      //       <td className="text-black">{nombreCliente}</td>
      //       <td className="text-black">{mail}</td>
      //       <td className="text-black">{contrasena}</td>
      //       <td className="text-black">{estado}</td>
      //       <td className="text-black">{perfil}</td>
      //       <td className="text-black"> */}
      // {/* <Button variant="warning" className="me-1">Suspender</Button> */}
      // {/* <Button variant="danger" type="submit" onclick={handleDeleteCliente} >Eliminar</Button> */}
      // {/* </td>
      //     </tr> */}
    
  );
};

export default ItemCliente;
