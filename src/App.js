import DetalleProducto from "./components/views/producto/DetalleProducto";
import Home from "./components/views/Home";
import AcercaDe from "./components/views/AcercaDe";
import React, {useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/common/Menu';
import Footer from './components/common/Footer'
import Registro from './components/views/Registro';
import Login from './components/views/Login';
import Error from './components/views/Error';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [usuarioLogueado, setUsuarioLogueado] = useState({});

  return (
    <div>
      <BrowserRouter>
      <Menu usuarioLogueado={usuarioLogueado} setUsuarioLogueado={setUsuarioLogueado} />
        <Routes>
          <Route exact path="/" element={<Home></Home>} />
          <Route exact path="/detalleProducto/:id" element={<DetalleProducto></DetalleProducto>} />
          <Route exact path="/acercaDe" element={<AcercaDe></AcercaDe>} />
          <Route exact path="/registro" element={<Registro setUsuarioLogueado={setUsuarioLogueado}/>} />
          <Route exact path="/login" element={<Login setUsuarioLogueado={setUsuarioLogueado}/>} />
          <Route exact path="*" element={<Error></Error>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default App;
