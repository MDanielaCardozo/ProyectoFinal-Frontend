import React, { Fragment, useEffect, useState } from "react";
import { Card, Row, Col, Badge, Button } from "react-bootstrap";
import "./DetalleProducto.css";
import Burger from "../../imgDetalle/burger.jpeg";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const DetalleProducto = () => {
  const { id } = useParams();
  console.log(id);
  const URL = process.env.REACT_APP_API_HAMBURGUESERIA;
  const [producto, setProducto] = useState([]);

  useEffect(() => {
    consultarProd();
  }, []);

  const consultarProd = async () => {
    try {
      const respuesta = await fetch(URL + "productos/" + id);
      const listarProductos = await respuesta.json();
      setProducto(listarProductos);
    } catch (error) {
      console.log("No pudieron cargarse los productos");
    }
  };
  
  console.log(producto)
  // agregar a carrito

  const agregarCarrito = async (_id) => {
    try {
      const pedidos = {
        usuario:"Fran", 
        fecha:"12/10/22",
        productosdelmenu:["Burger"],
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
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="imagenFondo">
      <Card className="container bgCard p-4 mb-3">
        <Row className="w-100">
          <Col md={6}>
            <img src={producto.imagen} alt={producto.nombre} className="w-100 p-3 imagenDetalle" />
          </Col>
          <Col md={6} className="p-3">
            <h3 className="text-light tituloDetalle">{producto.nombre}</h3>
            <hr />
            <Badge bg="secondary">{producto.categoria}</Badge>
            <p className="mt-3 text-light">
              <b>Precio: ${producto.precio}</b>
            </p>
            <p className="text-light tipografiaDetalle">
              {producto.descripcion}
            </p>
            {/* <Link to={`*`} className="btn btn-outline-light">
              Agregar al carrito
            </Link> */}
            <Button className='btn btn-outline-light' onClick={()=>{agregarCarrito(producto._id)}}>Agregar al carrito</Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default DetalleProducto;
