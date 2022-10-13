import React, {useState, useEffect} from "react";
import Table from "react-bootstrap/Table";
import Swal from "sweetalert2";
import ItemPedido from "./ItemPedido";


const AdministrarPedidos = () => {
    // ¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡TRAER URL DE LA API!!!!!!!!
  const URL = process.env.REACT_APP_API_

  const [pedidos, setPedidos] = useState([]);

  useEffect(()=>{
    consultarAPI();
  },[])

  const consultarAPI = async () =>{
    try {
      const respuesta = await fetch (URL);
      const listaPedidos = await respuesta.json();
      setPedidos(listaPedidos);
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
            <p>Lista de pedidos</p>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Cliente</th>
                  <th>Fecha</th>
                  <th>Detalle de compra</th>
                  <th>Monto total</th>
                  <th>Estado</th>
                </tr>
              </thead>
              <tbody>
                {pedidos.map((pedido)=>(
                  <ItemPedido 
                    key={pedido.idPedido}
                    pedido={pedido}
                    consultarAPI={consultarAPI}
                  />
                ))}
              </tbody>
            </Table>
        </div>
    );
};

export default AdministrarPedidos;