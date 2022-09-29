import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetalleProducto from "./components/views/producto/DetalleProducto";
import Home from "./components/views/Home";
import AcercaDe from "./components/views/AcercaDe";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";

const App = () => {
  return (
    <body>
      <BrowserRouter>
        <header>
          <Menu></Menu>
        </header>
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
        <footer>
          <Footer></Footer>
        </footer>
      </BrowserRouter>
    </body>
  );
};

export default App;
