import React from "react";
import Button from "react-bootstrap/esm/Button";
import Swal from "sweetalert2";

const ItemCliente = (props) => {

  // TRAER AL URL DE LA API
  console.log(props.cliente.estado)

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
          const respuesta = await fetch(URL + "/" + props.cliente.id , parametros);
          if (respuesta.status === 200) {
            Swal.fire(
              "Eliminado",
              "El cliente fue borrado con éxito",
              "success"
            );
            // ACÁ CONSULTA A LA API
            props.consultarAPI();
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
      <td className="text-black">{props.cliente.id}</td>
      <td className="text-black">{props.cliente.nombre}</td>
      <td className="text-black">{props.cliente.email}</td>
      <td className="text-black">{props.cliente.password}</td>
      <td className="text-black">{props.cliente.estado?"activo":"inactivo"}</td>
      <td className="text-black">{props.cliente.perfil?"usuario":"admin"}</td>
            <td className="text-black">
              <Button variant="warning" className="me-1">Suspender</Button>
              <Button variant="danger" type="submit" onclick={handleDeleteCliente} >Eliminar</Button>
            </td> 
        </tr>
    
  );
};

export default ItemCliente;
