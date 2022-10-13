import DetalleProducto from "./components/views/producto/DetalleProducto";
import Home from "./components/views/Home";
import AcercaDe from "./components/views/AcercaDe";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import Registro from "./components/views/Registro";
import CrearProducto from "./components/views/administrador/AdminCrearProducto"
import Login from "./components/views/Login";
import Error from "./components/views/Error";
import "bootstrap/dist/css/bootstrap.min.css";
import Administrador from "./components/views/administrador/Administrador";
import ItemProducto from "./components/views/administrador/ItemProducto";
import EditarProducto from "./components/views/producto/EditarProducto";

const App = () => {
  const [usuarioLogueado, setUsuarioLogueado] = useState({});

  return (
    <div>
      <BrowserRouter>
        <Menu usuarioLogueado={usuarioLogueado} setUsuarioLogueado={setUsuarioLogueado} />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/administrador" element={<Administrador/>} />
          <Route exact path="/acercaDe" element={<AcercaDe/>} />
          <Route exact path="/administrador/editar/:id" element={<EditarProducto/>} />
          <Route exact path="/detalleProducto/:id" element={<DetalleProducto/>} />
          <Route exact path="/login" element={<Login setUsuarioLogueado={setUsuarioLogueado}/>}/>
          <Route exact path="/registro" element={<Registro setUsuarioLogueado={setUsuarioLogueado}/>} />
          <Route exact path="*" element={<Error/>} />
          <Route exact path="/crearProducto" element={<CrearProducto/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
