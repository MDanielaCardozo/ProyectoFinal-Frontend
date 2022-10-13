import React from "react";
import Swal from "sweetalert2";
import Button from "react-bootstrap/esm/Button";
import "./ItemProducto.css";

const ItemProducto = ({ producto, consultarAPI }) => {
  const URL = process.env.REACT_APP_API_HAMBURGUESERIA;

  const handleDeleteProducto = () => {
    Swal.fire({
      title: "Desea borrar este producto?",
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
          const respuesta = await fetch(
            URL + "productos/" + producto._id,
            parametros
          );
          if (respuesta.status === 200) {
            Swal.fire(
              "Eliminado",
              "El producto fue borrado con éxito",
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
      <td className="text-black">{producto._id}</td>
      <td className="text-black">{producto.nombre}</td>
      <td className="text-black">${producto.precio}</td>
      <td className="text-black">{producto.detalle}</td>
      <td className="text-black">{producto.categoria}</td>
      <td className="text-black truncate">{producto.imagen}</td>
      <td className="text-black">
        <Button variant="warning" className="me-1">
          Editar
        </Button>
        <Button variant="danger" type="submit" onClick={handleDeleteProducto}>
          Eliminar
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
