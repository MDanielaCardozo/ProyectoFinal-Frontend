import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import ItemPedidos from "./ItemPedidos";
import "./Pedidos.css";

const Pedidos = () => {
    const URL = process.env.REACT_APP_API_HAMBURGUESERIA;
    const productosPedido = JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE_PRODUCTOS_PEDIDO)) || [];
    const usuario = JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE)) || {nombre: "anonimo!!"};
    const [listaProductosPedido, setListaProductosPedido] = useState(productosPedido);

    const quitarProducto=(producto)=>{
      let nuevaLista = listaProductosPedido.filter((item)=>{return item._id !== producto._id});
      setListaProductosPedido( nuevaLista );
      localStorage.setItem(process.env.REACT_APP_LOCALSTORAGE_PRODUCTOS_PEDIDO, JSON.stringify(nuevaLista));
      Swal.fire(
        'Producto eliminado',
        'El producto fue quitado del pedido',
        'success'
      );
    }
  
    const handleClick = async (_id) => {
      try {
        let productosPedido = [];
        listaProductosPedido.forEach(element => {
          productosPedido.push(element.nombre);
        });
        const pedidos = {
          usuario: usuario.nombre,
          fecha:"10/10/22",
          productosdelmenu:[...productosPedido],
          estado:true
        }
        console.log(URL + "pedidos")

        const respuesta = await fetch(URL + "pedidos",{
          method:'POST',
          headers:{
            "Content-Type":"application/json"
          },
          body: JSON.stringify(pedidos)
        })
        console.log(respuesta);
        const data = await respuesta.json();
        console.log(data)

      } catch (error) {
        console.log(error)
      }
    }


    return (
        <div className="fondo text-center text-dark">
            <h1 className="display-3 text-light">CARRITO DE COMPRAS</h1>
            <div className="tabla container py-3">
                <Table striped bordered responsive>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Precio</th>
                            <th>Accion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listaProductosPedido.map((producto) => (
                            <ItemPedidos key={producto._id} producto={producto} quitarProducto={quitarProducto}></ItemPedidos>
                        ))}
                    </tbody>
                </Table>
                <div className="text-end">
                    <Button variant="primary" className="mt-3" onClick={handleClick}>
                        Proceder a pagar
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Pedidos;
