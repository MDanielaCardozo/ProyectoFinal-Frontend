import React, {useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/common/Menu';
import Footer from './components/common/Footer'
import Registro from './components/views/Registro';
import Login from './components/views/Login';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [usuarioLogueado, setUsuarioLogueado] = useState({});

  return (
    <BrowserRouter>
        <Menu/>
        <Routes>
            <Route exact path="/registro" element={<Registro setUsuarioLogueado={setUsuarioLogueado}/>}></Route>
            <Route exact path="/login" element={<Login setUsuarioLogueado={setUsuarioLogueado}/>}></Route>
        </Routes>
        <Footer/>
    </BrowserRouter>
  );
};

export default App;