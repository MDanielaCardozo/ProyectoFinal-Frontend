import DetalleProducto from "./components/views/producto/DetalleProducto";
import Home from "./components/views/Home";
import AcercaDe from "./components/views/AcercaDe";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import Registro from "./components/views/Registro";
import Login from "./components/views/Login";
import Error from "./components/views/Error";
import "bootstrap/dist/css/bootstrap.min.css";
import Administrador from "./components/views/administrador/Administrador";

const App = () => {
  const [usuarioLogueado, setUsuarioLogueado] = useState({});

  return (
    <div>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route exact path="*" element={<Error></Error>} />
          <Route exact path="/" element={<Home></Home>}></Route>
          <Route
            exact
            path="/detalleProducto/:id"
            element={<DetalleProducto></DetalleProducto>}
          ></Route>
          <Route exact path="/acercaDe" element={<AcercaDe></AcercaDe>}></Route>
          {/* <Route exact path="*" element={<Error404></Error404>}></Route> */}
          <Route
            exact
            path="/registro"
            element={<Registro setUsuarioLogueado={setUsuarioLogueado} />}
          ></Route>
          <Route
            exact
            path="/login"
            element={<Login setUsuarioLogueado={setUsuarioLogueado} />}
          ></Route>
          <Route
            exact
            path="/administrador"
            element={<Administrador />}
          ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
