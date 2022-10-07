import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetalleProducto from "./components/views/producto/DetalleProducto";
import Home from "./components/views/Home";
import AcercaDe from "./components/views/AcercaDe";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <header></header>
        <Routes>
          <Route exact path="/" element={<Home></Home>}></Route>
          <Route
            exact
            path="/detalleProducto/:id"
            element={<DetalleProducto></DetalleProducto>}
          ></Route>
          <Route exact path="/acercaDe" element={<AcercaDe></AcercaDe>}></Route>
          {/* <Route exact path="*" element={<Error404></Error404>}></Route> */}
        </Routes>
        <footer></footer>
      </BrowserRouter>
    </div>
  );
};

export default App;
