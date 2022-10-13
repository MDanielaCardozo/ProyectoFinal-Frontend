import React, { useEffect, useState } from "react";
import { Card, Row, Col, Badge, Button } from "react-bootstrap";
import "./DetalleProducto.css";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const DetalleProducto = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  const URL = process.env.REACT_APP_API_HAMBURGUESERIA;
  const [producto, setProducto] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
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

  const agregarCarrito = (producto) => {
    let productosPedido =
      JSON.parse(
        localStorage.getItem(
          process.env.REACT_APP_LOCALSTORAGE_PRODUCTOS_PEDIDO
        )
      ) || [];
    productosPedido.push(producto);
    localStorage.setItem(
      process.env.REACT_APP_LOCALSTORAGE_PRODUCTOS_PEDIDO,
      JSON.stringify(productosPedido)
    );
    Swal.fire(
      "Producto agregado",
      "El producto fue agregado correctamente",
      "success"
    );
    navigate("/");
  };

  // const agregarCarrito = async (_id) => {
  //   try {

  //     const usuario = JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE));
  //     console.log(usuario);
  //     const pedidos = {
  //       // usuario:"Fran",
  //       // fecha:"12/10/22",
  //       // productosdelmenu:["Burger"],
  //       // estado:true

  //     usuario: usuario.nombre,
  //     fecha:"10/10/22",
  //     productosdelmenu:["123"],
  //     estado:true

  //   }
  //   console.log(URL + "pedidos")

  //     const respuesta = await fetch(URL + "pedidos",{
  //       method:'POST',
  //       headers:{
  //         "Content-Type":"application/json"
  //       },
  //       body: JSON.stringify(pedidos)
  //     })
  //     console.log(respuesta);
  //     const data = await respuesta.json();
  //     console.log(data)

  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  return (
    <div className="imagenFondo">
      <Card className="container bgCard p-4 mb-3">
        <Row className="w-100">
          <Col md={6}>
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="w-100 p-3 imagenDetalle"
            />
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
            <Button
              className="btn btn-outline-light"
              onClick={() => {
                agregarCarrito(producto);
              }}
            >
              Agregar al carrito
            </Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default DetalleProducto;
