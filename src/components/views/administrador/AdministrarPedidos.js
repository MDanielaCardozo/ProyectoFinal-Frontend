import React, {useState, useEffect} from "react";
import Table from "react-bootstrap/Table";
import Swal from "sweetalert2";
import ItemPedido from "./ItemPedido";
import "./administrador.css"


const AdministrarPedidos = () => {
  const URL = process.env.REACT_APP_API_HAMBURGUESERIA;

  const [pedidos, setPedidos] = useState([]);

  useEffect(()=>{
    consultarAPI();
  },[])

  const consultarAPI = async () =>{
    try {
      const respuesta = await fetch (URL+'pedidos');
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
        <div className="container paddingInicio">
            <p>Lista de pedidos</p>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Pedido</th>
                  <th>Cliente</th>
                  <th>Fecha</th>
                  <th>Estado</th>
                  <th>Cambiar estado</th>
                </tr>
              </thead>
              <tbody>
                {pedidos.map((pedido)=>(
                  <ItemPedido 
                    key={pedido._id}
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