import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/views/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Registro from './components/views/Registro';


const App = () => {
  return (
      <div>
          <BrowserRouter>       
              <Routes>
                  <Route exact path="/login" element={<Login />}></Route>
                  <Route exact path="/registro" element={<Registro />}></Route>
              </Routes>
          </BrowserRouter>
      </div>
  );
};

export default App;