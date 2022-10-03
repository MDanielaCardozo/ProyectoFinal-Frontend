import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AcercaDe from "./components/views/AcercaDe";
import DetalleProducto from "./components/views/producto/DetalleProducto";
import Home from "./components/views/Home";
import Login from './components/views/Login';
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [usuarioLogueado, setUsuarioLogueado] = useState({});

  return (
    <body>
      <BrowserRouter>
        <header></header>
        <Routes>
          <Route exact path="/" element={<Home></Home>}></Route>
          <Route exact path="/login" element={<Login></Login>} />
          <Route exact path="/detalleProducto/:id" element={<DetalleProducto></DetalleProducto>} ></Route>
          <Route exact path="/acercaDe" element={<AcercaDe></AcercaDe>}></Route>
          {/* <Route exact path="*" element={<Error404></Error404>}></Route> */}
        </Routes>
        <footer></footer>
      </BrowserRouter>
    </body>
  );
};

export default App;
