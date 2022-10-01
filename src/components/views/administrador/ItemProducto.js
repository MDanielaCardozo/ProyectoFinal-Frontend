import React from 'react';
import Swal from 'sweetalert2';

const ItemProducto = () => {
    const {idProducto, nombreProducto, estado, precio, descripcion, imagen, categoria} = {...producto}

    // traer el URL de la API
    // const URL

    const handleDeleteProducto = ()=>{
        Swal.fire({
            title: "Desea borrar este producto?",
            text: "No podrás revertir esto",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Eliminar",
            cancelButtonColor: "#d33",
            cancelButtonText: "Cancelar",
        }).then(async (result)=>{
            if(result.isConfirmed) {
                try{
                    const parametros = {
                        method: "DELETE",
                    };
                    const respuesta = await fetch (URL + "/" + idProducto, parametros);
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
    })
    }

    return (
        <div>
            {/* <tr>
            <td>{idProducto}</td>
            <td>{nombreProducto}</td>
            <td>{estado}</td>
            <td>{precio}</td>
            <td>{descripcion}</td>
            <td>{categoria}</td>
            <td>{imagen}</td>
            <td>
                <Button variant="warning">Editar</Button>
                <Button variant="danger" type="submit" onclick={handleDeleteProducto} >Eliminar</Button>
            </td>
          </tr> */}

            <tr>
            <td>1</td>
            <td>Hamb clasica</td>
            <td>Disponible</td>
            <td>850</td>
            <td>Tomate, lechuga y aderezos</td>
            <td>Hamburguesa</td>
            <td>pexels</td>
            <td>
                <Button variant="warning">Editar</Button>
                <Button variant="danger" type="submit" onclick={handleDeleteProducto}>Eliminar</Button>
            </td>
          </tr>
        </div>
    );
};

export default ItemProducto;