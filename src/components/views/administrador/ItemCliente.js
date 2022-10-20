import React,{useState} from "react";
import Button from "react-bootstrap/esm/Button";
import Swal from "sweetalert2";

const ItemCliente = ({ cliente, consultarAPI }) => {
  const URL = process.env.REACT_APP_API_USUARIOS;

  const handleSuspender = (_id) => {
    if(cliente.estado === true){
    Swal.fire({
      title: "Desea suspender a este cliente?",
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
          const respuesta = await fetch(
            URL + "/suspender/" + cliente._id,
            parametros
          );
          if (respuesta.status === 200) {
            Swal.fire(
              "Cliente suspendido",
              "El cliente fue suspendido con éxito",
              "success"
            );
            consultarAPI();
          }
        } catch (error) {
          console.log(error);
          Swal.fire({
            icon: "error",
            title: "Algo falló",
            text: "Intenta esta acción más tarde",
          });
        }
      }
    });
}else{
      Swal.fire({
        title: "Desea habilitar a este cliente?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Habilitar",
        cancelButtonColor: "#d33",
        cancelButtonText: "Cancelar",
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            const parametros = {
              method: "POST",
            };
            const respuesta = await fetch(
              URL + "/habilitar/" + cliente._id,
              parametros
            );
            if (respuesta.status === 200) {
              Swal.fire(
                "Cliente habilitado",
                "El cliente se habilito con éxito",
                "success"
              );
              consultarAPI();
            }
          } catch (error) {
            console.log(error);
            Swal.fire({
              icon: "error",
              title: "Algo falló",
              text: "Intenta esta acción más tarde",
            });
          }
        }
      });
  };
};

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
          const respuesta = await fetch(URL +'/eliminar/'+ cliente._id, parametros);
          if (respuesta.status === 200) {
            Swal.fire(
              "Eliminado",
              "El cliente fue borrado con éxito",
              "success"
            );
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
      <td className="text-black itemTabla">{cliente.nombre}</td>
      <td className="text-black itemTabla">{cliente.email}</td>
      <td className="text-black itemTabla">
        {cliente.perfil ? "Admin" : "Cliente"}
      </td>
      <td className="text-black itemTabla d-flex justify-content-around">
        <Button
          variant="warning"
          className="me-1 btnItemsAdmin"
          onClick={() => {
            handleSuspender(cliente._id);
          }}
        >{cliente.estado ? "Suspender" : "Habilitar"}
        </Button>
        <Button
          variant="danger"
          type="submit"
          className="btnItemsAdmin"
          onClick={handleDeleteCliente}
        >
          Eliminar
        </Button>
      </td>
    </tr>
  );
};

export default ItemCliente;
