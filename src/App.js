import React, {useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Registro from './components/views/Registro';
import Login from './components/views/Login';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [usuarioLogueado, setUsuarioLogueado] = useState({});

  return (
      <div>
          <BrowserRouter>
              <Routes>
                  <Route exact path="/registro" element={<Registro />}></Route>
                  <Route exact path="/login" element={<Login />}></Route>
              </Routes>
          </BrowserRouter>
      </div>
  );
};

export default App;