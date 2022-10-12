import React from "react";
import Swal from "sweetalert2";
import Button from "react-bootstrap/esm/Button";

const ItemProducto = (producto, consultarAPI) => {
  const {
    idProducto,
    nombreProducto,
    estado,
    precio,
    descripcion,
    imagen,
    categoria,
  } = { ...producto };

  // traer el URL de la API
  // const URL

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
          const respuesta = await fetch(URL + "/" + idProducto, parametros);
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
        <td className="text-black">1</td>
        <td className="text-black">Hamb clasica</td>
        <td className="text-black">Disponible</td>
        <td className="text-black">850</td>
        <td className="text-black">Tomate, lechuga y aderezos</td>
        <td className="text-black">Hamburguesa</td>
        <td className="text-black">pexels</td>
        <td className="text-black">
          <Button variant="warning" className="me-1">Editar</Button>
          <Button variant="danger" type="submit" onClick={handleDeleteProducto}>
            Eliminar
          </Button>
        </td>
      </tr>
    
  );
};

export default ItemProducto;
